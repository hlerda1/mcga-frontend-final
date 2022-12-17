import { combineReducers } from "redux";

import productsReducer from "../../Products/store/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;