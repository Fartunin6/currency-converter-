import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { CONVERT_NAMES, FetchRate } from '../types/convertTypes';
import { setRate, setSymbols } from '../actions/convertActions';

import { fetchRateRequest, fetchSymbolsRequest } from '../../services';

function* symbolsWorker() {
  const { data } = yield call(fetchSymbolsRequest);
  yield put(setSymbols(data.symbols));
}

function* symbolsWatcher() {
  yield takeEvery(CONVERT_NAMES.FETCH_SYMBOLS, symbolsWorker);
}

function* rateWorker({ payload, payload: { from, to, amount } }: FetchRate) {
  const { data } = yield call(fetchRateRequest, payload);

  const dataRate = `${(amount * data[`${from}_${to}`]).toFixed(2)} ${to}`;
  yield put(setRate(dataRate));
}

function* rateWatcher() {
  yield takeEvery(CONVERT_NAMES.FETCH_RATE, rateWorker);
}

export default function* convertSaga() {
  yield all([fork(symbolsWatcher), fork(rateWatcher)]);
}
