import { useForm } from 'react-hook-form';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProvider, updateProvider } from 'Providers/store/thunks';
import { useEffect } from 'react';
import { useMemo } from 'react';
import styles from './ProviderForm.module.css';
import { useNavigate } from 'react-router-dom';
import Card from 'shared/components/Card';

const ProviderForm = ({ provider }) => {
  const isEditMode = Boolean(provider);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.providers);
  const navigate = useNavigate();

  const defaultValues = useMemo(
    () => ({
      name: provider?.name || '',
    }),
    [provider]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  const onSubmit = async (providerData) => {
    if (isEditMode) {
      await dispatch(updateProvider(provider._id, providerData));
    } else {
      await dispatch(addProvider(providerData));
    }
    navigate('/providers');
  };

  return (
    <Card header={isEditMode ? 'Editar proveedor' : 'Agregar proveedor'}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          register={register}
          name="name"
          rules={{ required: 'Por favor, ingrese un nombre' }}
          label="Nombre"
          errors={errors}
        />
        <Button
          text={isEditMode ? 'Guardar' : 'Agregar'}
          type="submit"
          loading={isLoading}
        />
      </form>
    </Card>
  );
};

export default ProviderForm;
