import { CONVERT_NAMES, ConvertActions } from '../types/convertTypes';

export const setSymbols = (symbols: object): ConvertActions => ({
  type: CONVERT_NAMES.SET_SYMBOLS,
  payload: symbols,
});

export const fetchSymbols = (): ConvertActions => ({
  type: CONVERT_NAMES.FETCH_SYMBOLS,
});
