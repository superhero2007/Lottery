import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { parseError } from 'modules/client';

import { ActionTypes } from 'constants/index';

export const lotteryState = {
  lotteries: [],
  message: '',
  status: status.IDLE,
};

export default {
  lottery: handleActions({
    [ActionTypes.CREATE_LOTTERY]: (state) => {
      return immutable(state, {
        status: { $set: status.RUNNING },
      });
    },
    [ActionTypes.CREATE_LOTTERY_SUCCESS]: (state) => {
      return immutable(state, {
        status: { $set: status.IDLE },
      });
    },
    [ActionTypes.CREATE_LOTTERY_FAILURE]: (state, { payload }) => immutable(state, {
      message: { $set: parseError(payload.message) },
      status: { $set: status.ERROR },
    }),
    [ActionTypes.GET_LOTTERY]: (state) => {
      return immutable(state, {
        status: { $set: status.RUNNING },
      });
    },
    [ActionTypes.GET_LOTTERY_SUCCESS]: (state, { payload }) => {
      const lotteries = state.lotteries.filter(d => d.id !== payload.lottery.id);
      lotteries.push(payload.lottery);
      return immutable(state, {
        lotteries: { $set: lotteries },
        status: { $set: status.IDLE },
      });
    },
    [ActionTypes.GET_LOTTERY_FAILURE]: (state, { payload }) => immutable(state, {
      message: { $set: parseError(payload.message) },
      status: { $set: status.ERROR },
    }),
    [ActionTypes.GET_LOTTERIES]: (state) => {
      return immutable(state, {
        status: { $set: status.RUNNING },
      });
    },
    [ActionTypes.GET_LOTTERIES_SUCCESS]: (state, { payload }) => {
      return immutable(state, {
        lotteries: { $set: payload.lotteries },
        status: { $set: status.IDLE },
      });
    },
    [ActionTypes.GET_LOTTERY_FAILURE]: (state, { payload }) => immutable(state, {
      message: { $set: parseError(payload.message) },
      status: { $set: status.ERROR },
    }),
    [ActionTypes.UPDATE_LOTTERY]: (state) => {
      return immutable(state, {
        status: { $set: status.RUNNING },
      });
    },
    [ActionTypes.UPDATE_LOTTERY_SUCCESS]: (state, { payload }) => {
      return immutable(state, {
        lotteries: { $set: payload.lotteries },
        status: { $set: status.IDLE },
      });
    },
    [ActionTypes.UPDATE_LOTTERY_FAILURE]: (state, { payload }) => immutable(state, {
      message: { $set: parseError(payload.message) },
      status: { $set: status.ERROR },
    }),
    [ActionTypes.DELETE_LOTTERY]: (state) => {
      return immutable(state, {
        status: { $set: status.RUNNING },
      });
    },
    [ActionTypes.DELETE_LOTTERY_SUCCESS]: (state, { payload }) => {
      return immutable(state, {
        lotteries: { $set: payload.lotteries },
        status: { $set: status.IDLE },
      });
    },
    [ActionTypes.DELETE_LOTTERY_FAILURE]: (state, { payload }) => immutable(state, {
      message: { $set: parseError(payload.message) },
      status: { $set: status.ERROR },
    }),
  }, lotteryState),
};
