import ProdForm from '../../components/ProductForm';
import styles from './AddProduct.module.css';

const ProdInputForm = () => {
  document.title = 'Agregar producto';

  return (
    <div className={styles.addProductPage}>
      <h1>Agregar producto</h1>
      <ProdForm />
    </div>
  );
};

export default ProdInputForm;
