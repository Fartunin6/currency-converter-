import { RATE_NAMES, RateActions, Rates, Label } from '../types/rateTypes';

const initialState = {
  rates: {} as Rates | {},
  savedRates: null as Label[] | null,
};

type RateState = typeof initialState;

const rateReducer = (state = initialState, action: RateActions): RateState => {
  switch (action.type) {
    case RATE_NAMES.SET_RATES:
      return {
        ...state,
        rates: action.payload,
      };
    case RATE_NAMES.SET_SAVED_RATES:
      return {
        ...state,
        savedRates: action.payload.length >= 1 ? action.payload : null,
      };
    default:
      return state;
  }
};

export default rateReducer;
