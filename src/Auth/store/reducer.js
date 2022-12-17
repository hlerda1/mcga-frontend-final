import { AuthActions, TOKEN_KEY } from './types';

const INITIAL_STATE = {
  isLoadingAuth: false,
  user: JSON.parse(localStorage.getItem(TOKEN_KEY))?.user || null,
  token: JSON.parse(localStorage.getItem(TOKEN_KEY)),
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActions.SET_LOADING:
      return {
        ...state,
        isLoadingAuth: action.payload.isLoadingAuth,
      };
    case AuthActions.DISMISS_LOADING:
      return {
        ...state,
        isLoadingAuth: action.payload.isLoadingAuth,
      };
    case AuthActions.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
