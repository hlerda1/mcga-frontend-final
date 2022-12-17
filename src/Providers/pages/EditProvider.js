import ProviderForm from 'Providers/components/ProviderForm';
import { setProvider } from 'Providers/store/actions';
import { getProvider } from 'Providers/store/thunks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHttpClient } from 'shared/context/httpClient.context';

const EditProvider = () => {
  const { provider, providers } = useSelector((state) => state.providers);
  const { providerId } = useParams();
  const httpClient = useHttpClient();
  const dispatch = useDispatch();
  useEffect(() => {
    if (provider) {
      return;
    }
    const foundProvider = providers.find(
      (provider) => provider._id === providerId
    );
    if (foundProvider) {
      dispatch(setProvider(foundProvider));
    } else {
      dispatch(getProvider(providerId, httpClient));
    }
  }, [providerId, provider, dispatch, providers, httpClient]);

  return (
    <div>
      <h1>Editar proveedor</h1>
      <ProviderForm provider={provider} />
    </div>
  );
};

export default EditProvider;
