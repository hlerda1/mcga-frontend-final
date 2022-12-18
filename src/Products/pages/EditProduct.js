import ProductForm from 'Products/components/ProductForm';
import { useProducts } from 'Products/store/reducer';
import { getProduct } from 'Products/store/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from 'shared/components/LoadingSpinner';
import styles from './EditProduct.module.css';

const EditProduct = () => {
  document.title = 'Editar producto';
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, isLoadingProducts } = useProducts();
  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className={styles.editProductPage}>
      {isLoadingProducts && <LoadingSpinner />}
      {product && <ProductForm product={product} />}
    </div>
  );
};

export default EditProduct;
