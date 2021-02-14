import { RATE_NAMES, RateActions, Rates } from '../types/rateTypes';

const initialState = {
  rates: {} as Rates | {},
};

type RateState = typeof initialState;

const rateReducer = (state = initialState, action: RateActions): RateState => {
  switch (action.type) {
    case RATE_NAMES.SET_RATES:
      return {
        ...state,
        rates: action.payload,
      };
    default:
      return state;
  }
};

export default rateReducer;
