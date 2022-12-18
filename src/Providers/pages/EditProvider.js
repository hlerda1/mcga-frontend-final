import ProviderForm from 'Providers/components/ProviderForm';
import { setProvider } from 'Providers/store/actions';
import { getProvider } from 'Providers/store/thunks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditProvider = () => {
  const { provider, providers } = useSelector((state) => state.providers);
  const { providerId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const foundProvider = providers.find(
      (provider) => provider._id === providerId
    );
    if (foundProvider) {
      dispatch(setProvider(foundProvider));
    } else {
      dispatch(getProvider(providerId));
    }
  }, [providerId, provider, dispatch, providers]);

  return (
    <div className="formPage">
      <ProviderForm provider={provider} />
    </div>
  );
};

export default EditProvider;
