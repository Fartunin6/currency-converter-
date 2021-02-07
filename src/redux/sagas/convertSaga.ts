import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import ENDPOINTS from '../../constants/endpoints';

import { CONVERT_NAMES, FetchRate } from '../types/convertTypes';
import { ConvertData } from '../../pages/MainPage';

import { setRate, setSymbols } from '../actions/convertActions';

// these requests have to be in services folder
const fetchSymbolsRequest = async (): Promise<object> => {
  return await axios.get(ENDPOINTS.GET_SUPPORTED_SYMBOLS);
};

const fetchRateRequest = async (convertData: ConvertData): Promise<object> => {
  return await axios.get(ENDPOINTS.GET_RATE(convertData));
};

function* symbolsWorker() {
  const { data } = yield call(fetchSymbolsRequest);
  yield put(setSymbols(data.symbols));
}

function* symbolsWatcher() {
  yield takeEvery(CONVERT_NAMES.FETCH_SYMBOLS, symbolsWorker);
}

function* rateWorker({ payload, payload: { from, to, amount } }: FetchRate) {
  const { data } = yield call(fetchRateRequest, payload);

  const dataRate = `${Math.floor(amount * data[`${from}_${to}`])} ${to}`;
  yield put(setRate(dataRate));
}

function* rateWatcher() {
  yield takeEvery(CONVERT_NAMES.FETCH_RATE, rateWorker);
}

export default function* convertSaga() {
  yield all([fork(symbolsWatcher), fork(rateWatcher)]);
}
