import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import convertReducer from './reducers/convertReducer';

const rootReducer = combineReducers({
  form: formReducer,
  convert: convertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
