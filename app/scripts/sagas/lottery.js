/**
 * @module Sagas/Lottery
 * @desc Lottery
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';

let lotteries = [];

/**
 * Create
 */
export function* createLottery({ payload }) {
  try {
    yield call(delay, 200);
    const lottery = Object.assign(payload.lottery, { id: lotteries.length + 1 });
    const clone = lotteries.slice(0);
    clone.push(lottery);
    lotteries = clone;

    yield put({
      type: ActionTypes.CREATE_LOTTERY_SUCCESS,
      payload: { lottery },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.CREATE_LOTTERY_FAILURE,
      payload: err,
    });
  }
}

/**
 * Get
 */
export function* getLottery({ payload }) {
  try {
    yield call(delay, 500);

    yield put({
      type: ActionTypes.GET_LOTTERY_SUCCESS,
      payload: { lottery: lotteries[payload.id] },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.GET_LOTTERY_FAILURE,
      payload: err,
    });
  }
}

/**
 * Gets
 */
export function* getLotteries() {
  try {
    yield call(delay, 1000);

    yield put({
      type: ActionTypes.GET_LOTTERIES_SUCCESS,
      payload: { lotteries },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.GET_LOTTERIES_FAILURE,
      payload: err,
    });
  }
}

/**
 * Update
 */
export function* updateLottery({ payload }) {
  try {
    yield call(delay, 200);
    const clone = lotteries.filter((lottery) => { return lottery.id !== payload.lottery.id; });
    clone.push(payload.lottery);
    lotteries = clone;

    yield put({
      type: ActionTypes.UPDATE_LOTTERY_SUCCESS,
      payload: { lotteries: lotteries },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.UPDATE_LOTTERY_FAILURE,
      payload: err,
    });
  }
}

/**
 * Get
 */
export function* deleteLottery({ payload }) {
  try {
    yield call(delay, 200);
    const clone = lotteries.filter((lottery) => { return lottery.id !== payload.id; });
    lotteries = clone;

    yield put({
      type: ActionTypes.DELETE_LOTTERY_SUCCESS,
      payload: { lotteries: lotteries },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.DELETE_LOTTERY_FAILURE,
      payload: err,
    });
  }
}
/**
 * Lottery Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.CREATE_LOTTERY, createLottery),
    takeLatest(ActionTypes.GET_LOTTERY, getLottery),
    takeLatest(ActionTypes.GET_LOTTERIES, getLotteries),
    takeLatest(ActionTypes.UPDATE_LOTTERY, updateLottery),
    takeLatest(ActionTypes.DELETE_LOTTERY, deleteLottery),
  ]);
}
