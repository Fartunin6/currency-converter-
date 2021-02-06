import { CONVERT_NAMES, ConvertActions } from '../types/convertTypes';
import { ConvertData } from '../../pages/MainPage';

export const setSymbols = (symbols: object): ConvertActions => ({
  type: CONVERT_NAMES.SET_SYMBOLS,
  payload: symbols,
});

export const setRate = (result: string): ConvertActions => ({
  type: CONVERT_NAMES.SET_RATE,
  payload: result,
});

export const fetchSymbols = (): ConvertActions => ({
  type: CONVERT_NAMES.FETCH_SYMBOLS,
});

export const fetchRate = (convertData: ConvertData): ConvertActions => ({
  type: CONVERT_NAMES.FETCH_RATE,
  payload: convertData,
});
