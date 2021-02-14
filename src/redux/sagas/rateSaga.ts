import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import ENDPOINTS from '../../constants/endpoints';

import { RATE_NAMES } from '../types/rateTypes';
import { setRates } from '../actions/rateActions';

const fetchRatesRequest = async (): Promise<object> => {
  return await axios.get(ENDPOINTS.GET_EXCHANGE_RATE);
};

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
