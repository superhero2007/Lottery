import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  USER_LOGIN: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  CREATE_LOTTERY: undefined,
  CREATE_LOTTERY_SUCCESS: undefined,
  CREATE_LOTTERY_FAILURE: undefined,
  GET_LOTTERY: undefined,
  GET_LOTTERY_SUCCESS: undefined,
  GET_LOTTERY_FAILURE: undefined,
  GET_LOTTERIES: undefined,
  GET_LOTTERIES_SUCCESS: undefined,
  GET_LOTTERIES_FAILURE: undefined,
  UPDATE_LOTTERY: undefined,
  UPDATE_LOTTERY_SUCCESS: undefined,
  UPDATE_LOTTERY_FAILURE: undefined,
  DELETE_LOTTERY: undefined,
  DELETE_LOTTERY_SUCCESS: undefined,
  DELETE_LOTTERY_FAILURE: undefined,
});

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
