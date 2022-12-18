import { ProvidersActions } from "./types"

export const setProvidersLoading = () => {
  return {
    type: ProvidersActions.SET_LOADING,
    payload: true
  }
}

export const dismissProvidersLoading = () => {
  return {
    type: ProvidersActions.DISMISS_LOADING,
    payload: false
  }
}

export const setProviders = (providers) => {
  return {
    type: ProvidersActions.SET_PROVIDERS,
    payload: providers
  }
}

export const setProvider = (provider) => {
  return {
    type: ProvidersActions.SET_PROVIDER,
    payload: provider
  }
}