import { ConvertData } from '../../pages/MainPage';

export const CONVERT_NAMES = {
  SET_SYMBOLS: 'SET_SYMBOLS' as 'SET_SYMBOLS',
  FETCH_SYMBOLS: 'FETCH_SYMBOLS' as 'FETCH_SYMBOLS',

  SET_RATE: 'SET_RATE' as 'SET_RATE',
  FETCH_RATE: 'FETCH_RATE' as 'FETCH_RATE',

  SET_DEFAULT_CURRENCY: 'SET_DEFAULT_CURRENCY' as 'SET_DEFAULT_CURRENCY',
};

type SetSymbols = {
  type: typeof CONVERT_NAMES.SET_SYMBOLS;
  payload: object;
};

type SetRate = {
  type: typeof CONVERT_NAMES.SET_RATE;
  payload: string;
};

type SetDefaultCurrency = {
  type: typeof CONVERT_NAMES.SET_DEFAULT_CURRENCY;
  payload: string;
};

type FetchSymbols = {
  type: typeof CONVERT_NAMES.FETCH_SYMBOLS;
};

export type FetchRate = {
  type: typeof CONVERT_NAMES.FETCH_RATE;
  payload: ConvertData;
};

export type ConvertActions = SetSymbols | FetchSymbols | SetRate | FetchRate | SetDefaultCurrency;
