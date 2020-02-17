import _ from 'lodash';
import {ofType, Epic} from 'redux-observable';
import {map} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';

export default function epic(type, operation): Epic {
  let types = [];
  if (_.isArray(type)) {
    types = type;
  }
  if (typeof type === 'string') {
    types = [type];
  }
  return function(action$, store): Observable<any> {
    return action$.pipe(
      ofType(...types),
      map(({payload, meta}) => ({
        payload,
        meta,
        store,
      })),
      pipe(operation),
    );
  };
}
