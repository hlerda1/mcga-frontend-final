import { ProvidersActions } from './types';

const INITIAL_STATE = {
  providers: [],
  isLoading: false,
  error: null,
  provider: null,
};

const providersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProvidersActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ProvidersActions.DISMISS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ProvidersActions.SET_PROVIDERS:
      return {
        ...state,
        providers: action.payload,
      };
    case ProvidersActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ProvidersActions.SET_PROVIDER:
      return {
        ...state,
        provider: action.payload,
      };
    default:
      return state;
  }
};

export default providersReducer;
