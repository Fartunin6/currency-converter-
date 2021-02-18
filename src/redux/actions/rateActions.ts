import { RateActions, Rates, Label, RATE_NAMES } from '../types/rateTypes';

export const setRates = (rates: Rates): RateActions => ({
  type: RATE_NAMES.SET_RATES,
  payload: rates,
});

export const setSavedRates = (rates: Label[]): RateActions => ({
  type: RATE_NAMES.SET_SAVED_RATES,
  payload: rates,
});

export const fetchRates = (): RateActions => ({
  type: RATE_NAMES.FETCH_RATES,
});
