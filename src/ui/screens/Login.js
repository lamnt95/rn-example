import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import {actions} from '../../store/ducks';

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

class Login extends React.Component {
  constructor() {
    super();

    this.onPressLoginVND = this.onPressLoginVND.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(actions.loginStart());
  }

  onPressLoginVND() {
    console.log('onPressLoginVND');
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Login screen</Text>
        <Button onPress={this.onPressLoginVND} title="Login VND" />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
