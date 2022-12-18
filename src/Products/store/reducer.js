import { useSelector } from 'react-redux';
import { DISMISS_LOADING, SET_LOADING, SET_PRODUCT, SET_PRODUCTS, SET_PROVIDERS } from './types';

const INITIAL_STATE = {
  products: [],
  isLoadingProducts: false,
  providers: [],
  product: undefined
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoadingProducts: true,
      };
    case DISMISS_LOADING:
      return {
        ...state,
        isLoadingProducts: false,
      };
    case SET_PROVIDERS:
      return {
        ...state,
        providers: action.payload
      }
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state;
  }
};

export const useProducts = () => {
  return useSelector(state => state.products);
}
export default reducer;
