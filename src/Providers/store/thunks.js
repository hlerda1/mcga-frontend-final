import {
  dismissProvidersLoading,
  setProvider,
  setProviders,
  setProvidersLoading,
} from './actions';

export const getProviders = () => async (dispatch) => {
  try {
    dispatch(setProvidersLoading());
    const response = await fetch('providers');
    if (!response.ok) {
      throw new Error('Could not fetch');
    }
    const providers = await response.json();
    dispatch(setProviders(providers.data));
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const getProvider = (providerId) => async (dispatch) => {
  try {
    dispatch(setProvidersLoading());
    const response = await fetch(`providers/${providerId}`);
    if (!response.ok) {
      throw new Error('Could not fetch!');
    }
    const provider = await response.json();
    dispatch(setProvider(provider.data));
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const addProvider = (provider) => async (dispatch) => {
  try {
    dispatch(setProvidersLoading());
    const response = await fetch('providers', {
      method: 'POST',
      body: JSON.stringify(provider),
    });
    if (!response.ok) {
      throw new Error('Could not add provider!');
    }
    dispatch(getProviders());
    return await (response.json()).data;
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const updateProvider =
  (providerId, providerData) => async (dispatch) => {
    try {
      dispatch(setProvidersLoading());
      const response = await fetch(`providers/${providerId}`, {
        method: 'PUT',
        body: JSON.stringify(providerData),
      });
      if (!response.ok) {
        throw new Error('Could not update provider!');
      }
      dispatch(getProviders());
      return await (response.json()).data;
    } finally {
      dispatch(dismissProvidersLoading());
    }
  };

export const removeProvider = (providerId) => async (dispatch) => {
  try {
    dispatch(setProvidersLoading());
    const response = await fetch(`providers/${providerId}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Could not remove provider!');
    }
    dispatch(getProviders());
  } finally {
    dispatch(dismissProvidersLoading());
  }
};

export const activateProvider = (providerId) => async (dispatch) => {
  try {
    dispatch(setProvidersLoading());
    const response = await fetch(`providers/${providerId}`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error(response.message)
    }
    dispatch(getProviders());
    return await (response.json()).data;
  } finally {
    dispatch(dismissProvidersLoading());
  }
};
