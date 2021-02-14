export const RATE_NAMES = {
  SET_RATES: 'SET_RATES' as 'SET_RATES',
  FETCH_RATES: 'FETCH_RATES' as 'FETCH_RATES',
};

export type Rates = {
  [key: string]: number;
};

type SetRates = {
  type: typeof RATE_NAMES.SET_RATES;
  payload: object;
};

type FetchRates = {
  type: typeof RATE_NAMES.FETCH_RATES;
};

export type RateActions = SetRates | FetchRates;
