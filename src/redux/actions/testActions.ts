import { SET_USER_DATA, SetData, UserData } from '../types/testTypes';
import { FETCH_DATA, FetchData } from '../types/testTypes';

export const setData = (data: UserData): SetData => ({
  type: SET_USER_DATA,
  payload: data,
});

export const fetchData = (): FetchData => ({
  type: FETCH_DATA,
});
