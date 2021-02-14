import { all, fork } from 'redux-saga/effects';
import convertSaga from './sagas/convertSaga';
import rateSaga from './sagas/rateSaga';

export default function* rootSaga() {
  yield all([fork(convertSaga), fork(rateSaga)]);
}
