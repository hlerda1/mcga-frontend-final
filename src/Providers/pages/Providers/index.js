import { getProviders } from 'Providers/store/thunks';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ActionMenu from 'shared/components/ActionMenu';
import ButtonAddLink from 'shared/components/ButtonAdd';
import Table from 'shared/components/Table';
import styles from './Providers.module.css';

const { useSelector, useDispatch } = require('react-redux');

const Providers = () => {
  document.title = 'Proveedores';
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { providers } = useSelector((state) => state.providers);
  useEffect(() => {
    dispatch(getProviders());
  }, [dispatch]);
  const cols = [
    {
      header: 'ID',
      field: '_id',
    },
    {
      header: 'Nombre',
      field: 'name',
    },
    {
      header: 'Acciones',
      body: (row) => (
        <ActionMenu
          buttons={
            <>
              <Link title="Editar" to={`/providers/edit/${row._id}`}>
                <span>&#9998;</span>
                <span>Editar</span>
              </Link>
              <button
                title="Remover"
                // onClick={() => onRemoveProduct(product._id)}
                type="button"
              >
                <span>&times;</span>
                <span>Remover</span>
              </button>
            </>
          }
        />
      ),
    },
  ];

  return (
    <div>
      <div className={styles.heading}>
        <h1>Proveedores</h1>
        {auth.user && <ButtonAddLink to="/providers/add" />}
      </div>
      <Table columns={cols} value={providers} />
    </div>
  );
};

export default Providers;
