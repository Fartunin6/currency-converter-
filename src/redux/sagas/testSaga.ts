import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';

import { setData } from '../actions/testActions';
import { FETCH_DATA, UserData } from '../types/testTypes';

// it must be in services folder
const fetchRequest = async (): Promise<UserData> => {
  return await axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

function* dataWorker() {
  const { data } = yield call(fetchRequest);
  yield put(setData(data));
}

export function* dataWatcher() {
  yield takeEvery(FETCH_DATA, dataWorker);
}
