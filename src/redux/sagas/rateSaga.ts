import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { RATE_NAMES } from '../types/rateTypes';
import { setRates } from '../actions/rateActions';

import { fetchRatesRequest } from '../../services';

function* ratesWorker() {
  const { data } = yield call(fetchRatesRequest);
  yield put(setRates(data.rates));
}

function* ratesWatcher() {
  yield takeEvery(RATE_NAMES.FETCH_RATES, ratesWorker);
}

export default function* rateSaga() {
  yield all([fork(ratesWatcher)]);
}
