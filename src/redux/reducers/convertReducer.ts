import { CONVERT_NAMES, ConvertActions } from '../types/convertTypes';

const initialState = {
  symbols: {} as object,
  rate: null as string | null,
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
    default:
      return state;
  }
};

export default convertReducer;
