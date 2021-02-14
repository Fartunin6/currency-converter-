import { RateActions, Rates, RATE_NAMES } from '../types/rateTypes';

export const setRates = (rates: Rates): RateActions => ({
  type: RATE_NAMES.SET_RATES,
  payload: rates,
});

export const fetchRates = (): RateActions => ({
  type: RATE_NAMES.FETCH_RATES,
});
