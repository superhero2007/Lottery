// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  createLottery,
  getLottery,
  getLotteries,
  updateLottery,
  deleteLottery,
} = createActions({
  [ActionTypes.CREATE_LOTTERY]: (lottery: Object) => ({ lottery }),
  [ActionTypes.GET_LOTTERY]: (id: Number) => ({ id }),
  [ActionTypes.GET_LOTTERIES]: () => ({}),
  [ActionTypes.UPDATE_LOTTERY]: (lottery: Object) => ({ lottery }),
  [ActionTypes.DELETE_LOTTERY]: (id: Number) => ({ id }),
});
