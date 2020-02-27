import React from 'react';
import queryString from 'query-string';
import _ from 'lodash';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import WebView from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';

import {actions} from '../../store/ducks';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

function getParams(urlString) {
  try {
    const index = urlString.indexOf('?');
    const offset = urlString.indexOf('#');
    const end = offset > index ? offset : urlString.length;

    const search = urlString.substring(index, end);
    return queryString.parse(search);
  } catch (error) {
    return {};
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowWebView: false,
      isComplete: false,
    };
    this.onPressLoginVND = this.onPressLoginVND.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.onWebViewStateChange = this.onWebViewStateChange.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    const devideId = DeviceInfo.getDeviceId();
    dispatch(
      actions.addDeviceId({
        auth: {
          devideId,
        },
      }),
    );
  }

  onWebViewStateChange(state) {
    if (!this.state.isComplete) {
      const {url} = state;
      const params = getParams(url);
      const accessToken = _.get(params, 'token-id');
      if (accessToken) {
        this.setState({
          isShowWebView: false,
        });
        const {dispatch} = this.props;
        dispatch(actions.loginStart({auth: {accessToken}}));
        this.stopLoading();
      }
    }
  }

  onPressLoginVND() {
    this.setState({
      isShowWebView: true,
    });
  }

  stopLoading() {
    if (this.refWebview) {
      this.refWebview.stopLoading();
    }
  }

  renderWebView() {
    return (
      <WebView
        ref={ref => {
          this.refWebview = ref;
        }}
        source={{
          uri:
            'https://id-uat.vndirect.com.vn/logout?httpReferer=https://stockbook.vn/receive-token-vnd',
        }}
        onNavigationStateChange={this.onWebViewStateChange}
      />
    );
  }

  render() {
    const {isShowWebView} = this.state;
    if (isShowWebView) return this.renderWebView();
    return (
      <View style={styles.container}>
        <Text>Login screen</Text>
        <Button onPress={this.onPressLoginVND} title="Login VND" />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
