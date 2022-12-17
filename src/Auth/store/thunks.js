import {
  dismissLoadingAuth,
  logout,
  setAuthLoading,
  setToken,
  setUser,
} from './actions';

const URL_BASE = process.env.REACT_APP_API_URL;

const refreshToken = async (token, dispatch, isLogged, user) => {
  try {
    const newAccessTokenResponse = await fetch(`${URL_BASE}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });
    if (!newAccessTokenResponse.ok) {
      throw new Error('Could not fetch!');
    }
    const newAccessToken = await newAccessTokenResponse.json();
    dispatch(
      setToken({
        accessToken: newAccessToken.data.token,
        refreshToken: token.refreshToken,
        user,
      })
    );
    return newAccessToken.data;
  } catch (err) {
    console.log(err.message);
    if (err.status === 401) {
      dispatch(logout());
    }

    if (!isLogged) {
      await getUserData(dispatch, token.accessToken);
    }
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(setAuthLoading());
    const authResponse = await fetch(`${URL_BASE}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    dispatch(dismissLoadingAuth());
    if (!authResponse.ok) {
      throw new Error('No se pudo autenticar');
    }

    const auth = await authResponse.json();
    dispatch(setUser(auth.data.user));
    dispatch(
      setToken({
        accessToken: auth.data.tokens.accessToken.token,
        refreshToken: auth.data.tokens.refreshToken.token,
        user: auth.data.user,
      })
    );
  } catch (error) {
    dispatch(dismissLoadingAuth());
    throw error;
  }
};

const getUserData = async (dispatch, accessToken) => {
  try {
    dispatch(setAuthLoading());
    const userResponse = await fetch(`${URL_BASE}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(dismissLoadingAuth());

    if (!userResponse.ok) {
      throw new Error('Could not fetch');
    }

    const userInfo = await userResponse.json();
    dispatch(setUser(userInfo.data));
  } catch (error) {
    dispatch(dismissLoadingAuth());
    throw error;
  }
};

export const initialLoad = () => async (dispatch, getState) => {
  const { token, user } = getState().auth;
  const isLogged = Boolean(user);
  refreshToken(token, dispatch, isLogged, user);
  setInterval(() => {
    refreshToken(token, dispatch, isLogged, user);
  }, 10 * 60000);
};
