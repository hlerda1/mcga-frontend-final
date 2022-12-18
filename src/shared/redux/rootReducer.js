import authReducer from 'Auth/store/reducer';
import providersReducer from 'Providers/store/reducer';
import { combineReducers } from 'redux';

import productsReducer from '../../Products/store/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  providers: providersReducer,
  auth: authReducer,
});

export default rootReducer;
