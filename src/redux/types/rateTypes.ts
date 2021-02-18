export const RATE_NAMES = {
  SET_RATES: 'SET_RATES' as 'SET_RATES',
  FETCH_RATES: 'FETCH_RATES' as 'FETCH_RATES',

  SET_SAVED_RATES: 'SET_SAVED_RATES' as 'SET_SAVED_RATES',
};

export type Rates = {
  [key: string]: number;
};

export type Label = {
  rate: number;
  rateName: string;
};

type SetRates = {
  type: typeof RATE_NAMES.SET_RATES;
  payload: Rates;
};

type SetSavedRates = {
  type: typeof RATE_NAMES.SET_SAVED_RATES;
  payload: Label[];
};

type FetchRates = {
  type: typeof RATE_NAMES.FETCH_RATES;
};

export type RateActions = SetRates | FetchRates | SetSavedRates;
