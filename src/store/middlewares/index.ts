import {Middleware} from 'redux';
import actionFilterMiddleware from './actionFilterMiddleware';
import conductorMiddleware from './conductorMiddleware';

export function wrapMiddleware(
  middlewares: Array<Middleware>,
): Array<Middleware> {
  return [actionFilterMiddleware, conductorMiddleware, ...middlewares];
}
