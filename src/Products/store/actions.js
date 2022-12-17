import {
  SET_LOADING,
  SET_PRODUCTS,
  DISMISS_LOADING,
  SET_PROVIDERS,
  SET_PRODUCT,
} from './types';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
    payload: {
      isLoadingProducts: true,
    },
  };
};

export const dismissLoading = () => {
  return {
    type: DISMISS_LOADING,
    payload: {
      isLoadingProducts: false,
    },
  };
};

export const setProviders = (providers) => {
  return {
    type: SET_PROVIDERS,
    payload: providers,
  };
};

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product
  }
}
