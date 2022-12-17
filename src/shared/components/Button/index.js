import LoadingSpinner from '../LoadingSpinner';
import styles from './Button.module.css';

const sharedButton = ({text, onClick, type, loading, className}) => {
    return (
      <button type={type} onClick={onClick} disabled={loading} className={`${styles.btn} ${className}`}>
        {loading && <LoadingSpinner size="small" />}
        <span className={styles.btn__label}>{text}</span>
      </button>
    );
  };
  
  export default sharedButton;
