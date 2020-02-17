import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';

import * as feed from './feed';
import * as auth from './auth';

export const types = {
  ...feed.types,
  ...auth.types,
};

export const actions = {
  ...feed.actions,
  ...auth.actions,
};

export const selectors = {
  ...feed.selectors,
  ...auth.selectors,
};

export const reducer = combineReducers({
  feed: feed.reducer,
  auth: auth.reducer,
});

export const epic = combineEpics(...feed.epics, ...auth.epics);
