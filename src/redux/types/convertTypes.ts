export const CONVERT_NAMES = {
  SET_SYMBOLS: 'SET_SYMBOLS',
  FETCH_SYMBOLS: 'FETCH_SYMBOLS',
};

type SetSymbols = {
  type: typeof CONVERT_NAMES.SET_SYMBOLS;
  payload: object;
};

type FetchSymbols = {
  type: typeof CONVERT_NAMES.FETCH_SYMBOLS;
};

export type ConvertActions = FetchSymbols | SetSymbols;
