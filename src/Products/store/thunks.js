import { setLoading, dismissLoading, setProducts, setProviders, setProduct } from './actions';

const pURL = process.env.REACT_APP_API_URL;

export const getProducts = (showDeleted = false) => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products?showDeleted=${showDeleted}`);
  const prod = await response?.json();
  if (response.status === 200) {
    dispatch(dismissLoading());
    dispatch(setProducts(prod.data));
    return;
  } else {
    dispatch(dismissLoading());
    return;
  }
};

export const addProduct = (data) => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const { accessToken } = getState().auth.token;
    let response = await fetch(`${pURL}/products`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
    });
    if (!response.ok) {
      dispatch(dismissLoading());
      return;
    }
    const product = await response?.json();
    dispatch(dismissLoading());
    dispatch(getProducts());
    return product;
  } catch (error) {
    dispatch(dismissLoading);
  }
};

export const updateProduct = (productId, data) => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const { accessToken } = getState().auth.token;
    let response = await fetch(`${pURL}/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }, 
    });
    if (!response.ok) {
      dispatch(dismissLoading());
      return;
    }
    const product = await response?.json();
    dispatch(dismissLoading());
    dispatch(getProducts());
    return product;
  } catch (error) {
    dispatch(dismissLoading());
  }
};

export const removeProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${pURL}/products/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    dispatch(dismissLoading());
    if (!response.ok) {
      throw new Error('Could not remove product!')
    }
    dispatch(getProducts());
    return response.status === 204;
  } catch {
    dispatch(dismissLoading());
  }
};

export const getProviders = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${pURL}/providers`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error('No se pudo obtener los proveedores');
    }
    const providers = await response.json();
    dispatch(dismissLoading());
    dispatch(setProviders(providers.data));
  } catch (error) {
    dispatch(dismissLoading());
  }
}

export const getProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const { accessToken } = getState().auth.token;
    const response = await fetch(`${pURL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error('No se pudo obtener el producto');
    }
    const product = await response.json();
    dispatch(dismissLoading());
    dispatch(setProduct(product.data));
  } catch (error) {
    dispatch(dismissLoading());
  }
}
