import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import ENDPOINTS from '../../constants/endpoints';

import { CONVERT_NAMES } from '../types/convertTypes';
import { setSymbols } from '../actions/convertActions';

const fetchSymbolsRequest = async (): Promise<object> => {
  return await fetch(ENDPOINTS.GET_SUPPORTED_SYMBOLS);
};

function* symbolsWorker() {
  const { data } = yield call(fetchSymbolsRequest);
  yield put(setSymbols(data));
}

function* symbolsWatcher() {
  yield takeEvery(CONVERT_NAMES.FETCH_SYMBOLS, symbolsWorker);
}

export default function* convertSaga() {
  yield all([fork(symbolsWatcher)]);
}
