import { CONVERT_NAMES, ConvertActions } from '../types/convertTypes';

const initialState = {
  symbols: {} as object,
};

type ConvertState = typeof initialState;

const convertReducer = (state = initialState, action: ConvertActions): ConvertState => {
  switch (action.type) {
    case CONVERT_NAMES.SET_SYMBOLS:
      return {
        ...state,
        symbols: action.payload,
      };
    default:
      return state;
  }
};

export default convertReducer;
