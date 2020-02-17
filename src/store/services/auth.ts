import {post} from './http';
import {endpoint} from '../config/env';

const AUTHTYPE = {
  VNDID: 'VNDID',
};

function authenWithThirdPartyToken(accountType, deviceId, accessToken) {
  const url = `${endpoint}/api/auth/${accountType}`;
  const body = {deviceId};
  const headers = {Authorization: accessToken};
  return post(url, body, headers);
}

export function authenWithVnd(deviceId, accessToken) {
  return authenWithThirdPartyToken(AUTHTYPE.VNDID, deviceId, accessToken);
}
