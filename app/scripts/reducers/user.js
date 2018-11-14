import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const userState = {
  isAdmin: false,
  isAuthenticated: false,
  user: {},
  status: 'idle',
};

export default {
  user: handleActions({
    [ActionTypes.USER_LOGIN]: (state) => immutable(state, {
      status: { $set: 'running' },
    }),
    [ActionTypes.USER_LOGIN_SUCCESS]: (state, payload) => immutable(state, {
      isAdmin: { $set: payload.isAdmin },
      isAuthenticated: { $set: true },
      user: { $set: payload.user },
      status: { $set: 'idle' },
    }),
    [ActionTypes.USER_LOGOUT]: (state) => immutable(state, {
      status: { $set: 'running' },
    }),
    [ActionTypes.USER_LOGOUT_SUCCESS]: (state) => immutable(state, {
      isAuthenticated: { $set: false },
      user: { $set: {} },
      status: { $set: 'idle' },
    }),
  }, userState),
};
