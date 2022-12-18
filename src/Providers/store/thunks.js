import {
  dismissProvidersLoading,
  setProvider,
  setProviders,
  setProvidersLoading,
} from './actions';

const URL_BASE = process.env.REACT_APP_API_URL;

export const getProviders = () => async (dispatch, getState) => {
  try {
    dispatch(setProvidersLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${URL_BASE}/providers`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Could not fetch');
    }
    const providers = await response.json();
    dispatch(setProviders(providers.data));
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const getProvider = (providerId) => async (dispatch, getState) => {
  try {
    dispatch(setProvidersLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${URL_BASE}/providers/${providerId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Could not fetch!');
    }
    const provider = await response.json();
    dispatch(setProvider(provider.data));
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const addProvider = (provider) => async (dispatch, getState) => {
  try {
    dispatch(setProvidersLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${URL_BASE}/providers`, {
      method: 'POST',
      body: JSON.stringify(provider),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Could not add provider!');
    }
    dispatch(getProviders());
    return await response.json().data;
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const updateProvider =
  (providerId, providerData) => async (dispatch, getState) => {
    try {
      dispatch(setProvidersLoading());
      const { accessToken } = getState().auth.token;
      const response = await fetch(`${URL_BASE}/providers/${providerId}`, {
        method: 'PUT',
        body: JSON.stringify(providerData),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Could not update provider!');
      }
      dispatch(getProviders());
      return await response.json().data;
    } finally {
      dispatch(dismissProvidersLoading());
    }
  };

export const removeProvider = (providerId) => async (dispatch, getState) => {
  try {
    dispatch(setProvidersLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${URL_BASE}/providers/${providerId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Could not remove provider!');
    }
    dispatch(getProviders());
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const activateProvider = (providerId) => async (dispatch, getState) => {
  try {
    dispatch(setProvidersLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${URL_BASE}/providers/${providerId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(response.message);
    }
    dispatch(getProviders());
    return await response.json().data;
  } finally {
    dispatch(dismissProvidersLoading());
  }
};
