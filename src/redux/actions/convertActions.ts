import { CONVERT_NAMES, ConvertActions, Symbols } from '../types/convertTypes';
import { ConvertData } from '../../pages/MainPage';

export const setSymbols = (symbols: Symbols): ConvertActions => ({
  type: CONVERT_NAMES.SET_SYMBOLS,
  payload: symbols,
});

export const setRate = (result: string): ConvertActions => ({
  type: CONVERT_NAMES.SET_RATE,
  payload: result,
});

export const setDefaultCurrency = (currency: string): ConvertActions => ({
  type: CONVERT_NAMES.SET_DEFAULT_CURRENCY,
  payload: currency,
});

export const fetchSymbols = (): ConvertActions => ({
  type: CONVERT_NAMES.FETCH_SYMBOLS,
});

export const fetchRate = (convertData: ConvertData): ConvertActions => ({
  type: CONVERT_NAMES.FETCH_RATE,
  payload: convertData,
});
