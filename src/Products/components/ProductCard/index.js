import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onRemoveProduct }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuIsVisible((previousState) => !previousState);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__header}>
        <h3>{product.name}</h3>
        <div className={styles.dropdown}>
          <button
            className={styles.actionButton}
            onClick={toggleMenuVisibility}
            type="button"
          >
            ...
          </button>
          <div
            className={`${styles['dropdown-content']} ${
              menuIsVisible ? styles['dropdown-content--visible'] : ''
            }`}
          >
            <Link
              title="Editar"
              to={`/products/edit/${product._id}`}
              className={styles.btnAction}
            >
              <span>&#9998;</span>
              <span>Editar</span>
            </Link>
            <button
              title="Remover"
              onClick={() => onRemoveProduct(product._id)}
              className={styles.btnAction}
              type="button"
            >
              <span>&times;</span>
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productCard__body}>
        <p className={styles['productCard-price']}>
          <strong>$</strong>
          {product.price}
        </p>
        <p>
          <strong>Proveedor: </strong>
          {product.provider?.name}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
