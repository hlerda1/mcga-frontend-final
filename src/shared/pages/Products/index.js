import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts, removeProduct } from 'Products/store/thunks';
import { useProducts } from 'Products/store/reducer';
import ProductCard from 'Products/components/ProductCard';
import LoadingSpinner from 'shared/components/LoadingSpinner';
import styles from './prod.module.css';
import { Link } from 'react-router-dom';

const Products = () => {
  document.title = 'Productos';
  const dispatch = useDispatch();

  const { products, isLoadingProducts } = useProducts();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <div className={styles.products}>
      <div className={styles.heading}>
        <h1>Productos</h1>
        <Link className={styles.btnAdd} to="/products/add">+</Link>
      </div>
      {isLoadingProducts ? (
        <div className={styles.centerLoadingSpinner}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.productDeck}>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
              onRemoveProduct={() => onRemoveProduct(product._id)}
            />
          ))}
          {products.length === 0 && <h3>No se encontraron productos</h3>}
        </div>
      )}
    </div>
  );
};
export default Products;
