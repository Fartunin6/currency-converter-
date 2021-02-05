import { all, fork } from 'redux-saga/effects';
import convertSaga from './sagas/convertSaga';

export default function* rootSaga() {
  yield all([fork(convertSaga)]);
}
