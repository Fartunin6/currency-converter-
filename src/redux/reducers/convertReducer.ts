import { CONVERT_NAMES } from '../types/convertTypes';

const initialState = {
  symbols: {} as object,
  rate: null as string | null,
  defaultCurrency: '' as string,
};

type ConvertState = typeof initialState;

const convertReducer = (state = initialState, action: any): ConvertState => {
  switch (action.type) {
    case CONVERT_NAMES.SET_SYMBOLS:
      return {
        ...state,
        symbols: action.payload,
      };
    case CONVERT_NAMES.SET_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    case CONVERT_NAMES.SET_DEFAULT_CURRENCY:
      return {
        ...state,
        defaultCurrency: action.payload,
      };
    default:
      return state;
  }
};

export default convertReducer;
