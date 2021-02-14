import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import convertReducer from './reducers/convertReducer';
import rateReducer from './reducers/rateReducer';

const rootReducer = combineReducers({
  form: formReducer,
  convert: convertReducer,
  rate: rateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
