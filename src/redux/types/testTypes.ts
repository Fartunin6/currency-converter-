export const SET_USER_DATA = 'SET_USER_DATA';
export const FETCH_DATA = 'FETCH_DATA';

export type UserData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type SetData = {
  type: typeof SET_USER_DATA;
  payload: UserData;
};

export type FetchData = {
  type: typeof FETCH_DATA;
};

export type TestActions = FetchData | SetData;
