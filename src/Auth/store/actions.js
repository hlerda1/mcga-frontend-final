import { AuthActions, TOKEN_KEY } from './types';

export const dismissLoadingAuth = () => ({
  type: AuthActions.DISMISS_LOADING,
  payload: { isLoadingAuth: false },
});

export const setAuthLoading = () => ({
  type: AuthActions.SET_LOADING,
  payload: { isLoadingAuth: true },
});

export const setUser = (user) => ({
  type: AuthActions.SET_USER,
  payload: { user },
});

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  return {
    type: AuthActions.SET_TOKEN,
    payload: { token },
  };
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  return {
    type: AuthActions.LOGOUT,
    payload: { token: null, user: null },
  };
};
