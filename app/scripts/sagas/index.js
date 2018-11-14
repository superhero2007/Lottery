import { all, fork } from 'redux-saga/effects';

import user from './user';
import lottery from './lottery';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(user),
    fork(lottery),
  ]);
}
