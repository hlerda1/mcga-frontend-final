import LoadingSpinner from '../LoadingSpinner';
import styles from './Table.module.css';

const Table = ({ value, columns, className, isLoading }) => {
  return (
    <table className={`${styles.table} ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr className={styles.loading}>
            <td colSpan={columns.length}>
              <LoadingSpinner />
            </td>
          </tr>
        )}
        {!isLoading && value?.length === 0 && (
          <tr>
            <td colSpan={columns.length}>No se encontraron resultados</td>
          </tr>
        )}
        {value.map((row) => (
          <tr key={row._id}>
            {columns.map((column) => (
              <td key={`${row._id}.${column.field}`}>
                {column.body ? column.body(row) : row[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
