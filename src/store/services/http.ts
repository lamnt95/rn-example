import axios, {Method} from 'axios';

function callApi(
  method: Method,
  endpoint: string,
  body: Object,
  headers: Object,
  params: Object,
) {
  axios({
    url: endpoint,
    method,
    data: body,
    params,
    headers,
  });
}

export function get(endpoint, headers, params) {
  return callApi('GET', endpoint, undefined, headers, params);
}

export function post(endpoint, body = {}, headers = {}, params = {}) {
  return callApi('POST', endpoint, body, headers, params);
}

export function put(endpoint, body = {}, headers = {}, params = {}) {
  return callApi('PUT', endpoint, body, headers, params);
}

export function patch(endpoint, body = {}, headers = {}, params = {}) {
  return callApi('PATCH', endpoint, body, headers, params);
}

export function remove(endpoint, body = {}, headers = {}, params = {}) {
  return callApi('DELETE', endpoint, body, headers, params);
}
