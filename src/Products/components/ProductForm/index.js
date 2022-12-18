import { useEffect, useMemo } from 'react';
import styles from './ProductForm.module.css';
import ProdInput from '../../../shared/components/Input';
import ProdButton from '../../../shared/components/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProducts } from 'Products/store/reducer';
import { addProduct, getProviders, updateProduct } from 'Products/store/thunks';
import SelectInput from 'shared/components/SelectInput';

const ProdForm = ({ product }) => {
  const defaultValues = useMemo(
    () => ({
      name: product?.name || '',
      price: product?.price || 0,
      providerId: product?.provider || null,
    }),
    [product]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    defaultValues
  });

  useEffect(() => {
    reset(defaultValues)
  }, [product, defaultValues, reset])

  const dispatch = useDispatch();
  const { providers, isLoadingProducts } = useProducts();

  useEffect(() => {
    dispatch(getProviders());
  }, [dispatch]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (product) {
      dispatch(updateProduct(product._id, data));
    } else {
      dispatch(addProduct(data));
    }
    navigate('/products');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ProdInput
        register={register}
        type="text"
        placeholder="Nombre"
        name="name"
        label="Nombre"
        rules={{
          required: 'Nombre requerido'
        }}
        errors={errors}
      />

      <ProdInput
        register={register}
        type="number"
        placeholder="Precio"
        name="price"
        label="Precio"
        rules={{
          required: 'Precio requerido',
          min: {
            value: 0,
            message: 'Debe ser mayor o igual a 0'
          },
        }}
        errors={errors}
      />

      <SelectInput
        control={control}
        name="providerId"
        label="Proveedor"
        rules={{ required: 'Proveedor requerido' }}
        options={providers}
        optionValue="_id"
        optionLabel="name"
        errors={errors}
      />

      <ProdButton
        text={product ? 'Guardar' : 'Agregar'}
        type="submit"
        loading={isLoadingProducts}
      />
    </form>
  );
};

export default ProdForm;
