import ProdForm from '../../components/ProductForm';

const ProdInputForm = () => {
  document.title = 'Agregar producto';

  return (
    <div className="formPage">
      <ProdForm />
    </div>
  );
};

export default ProdInputForm;
