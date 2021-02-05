import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import testReducer from './reducers/testReducer';
import convertReducer from './reducers/convertReducer';

const rootReducer = combineReducers({
  test: testReducer,
  form: formReducer,
  convert: convertReducer,
});

export default rootReducer;
