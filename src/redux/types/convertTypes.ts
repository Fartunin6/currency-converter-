import { ConvertData } from '../../pages/MainPage';

export const CONVERT_NAMES = {
  SET_SYMBOLS: 'SET_SYMBOLS',
  FETCH_SYMBOLS: 'FETCH_SYMBOLS',

  SET_RATE: 'SET_RATE',
  FETCH_RATE: 'FETCH_RATE',
};

export type SetSymbols = {
  type: typeof CONVERT_NAMES.SET_SYMBOLS;
  payload: object;
};

export type SetRate = {
  type: typeof CONVERT_NAMES.SET_RATE;
  payload: string;
};

type FetchSymbols = {
  type: typeof CONVERT_NAMES.FETCH_SYMBOLS;
};

export type FetchRate = {
  type: typeof CONVERT_NAMES.FETCH_RATE;
  payload: ConvertData;
};

export type ConvertActions = SetSymbols | FetchSymbols | SetRate | FetchRate;
