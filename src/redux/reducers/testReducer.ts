import { SET_USER_DATA, TestActions, UserData } from '../types/testTypes';

const initialState = {
  userData: {} as UserData | {},
};

type testState = typeof initialState;

const testReducer = (state = initialState, action: TestActions): testState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
