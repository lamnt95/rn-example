import _ from 'lodash';
import Immutable from 'seamless-immutable';
import {switchMap} from 'rxjs/operators';
import epic from '../common/epic';
import {authenWithVnd} from '../services/auth';
import {ofType} from 'redux-observable';

export const types = {
  LOGIN_START: 'AUTH/LOGIN_START',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAIL: 'AUTH/LOGIN_FAIL',
};

export const actions = {
  loginStart: (payload, meta) => ({
    type: types.LOGIN_START,
    payload,
    meta,
  }),
  loginSuccess: (payload, meta) => ({
    type: types.LOGIN_SUCCESS,
    payload,
    meta,
  }),
  loginFail: (error, meta) => ({
    type: types.LOGIN_FAIL,
    error,
    meta,
  }),
};

export const selectors = {
  getAccessToken: state => _.get(state, 'auth.accessToken'),
  getDeviceId: state => _.get(state, 'auth.deviceId'),
};

export const initState = {};

export function reducer(state = initState, action) {
  const auth = _.get(action, 'payload.auth');
  const clear = _.get(action, 'meta.clear.auth');
  if (_.isEmpty(auth)) return state;
  if (clear) return Immutable.merge(state, auth);
  return Immutable.merge(state, auth, {deep: true});
}

export const loginStartEpic = (action$, store) =>
  action$.pipe(
    ofType(types.LOGIN_START),
    switchMap(async ({meta}) => {
      const state = store.value;
      const accessToken = selectors.getAccessToken(state);
      const deviceId = selectors.getDeviceId(state);
      const {scope} = meta || {};
      try {
        const res = await authenWithVnd(deviceId, accessToken);
        return Promise.resolve(actions.loginSuccess({auth: res}, {scope}));
      } catch (e) {
        return Promise.resolve(actions.loginFail(e, {scope}));
      }
    }),
  );

export const epics = [loginStartEpic];
