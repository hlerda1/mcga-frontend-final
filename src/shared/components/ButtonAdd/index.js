import { Link } from 'react-router-dom';
import styles from './ButtonAdd.module.css';

const ButtonAddLink = ({ to, className }) => {
  return (
    <Link className={`${styles.btnAdd} ${className || ''}`} to={to}>
      +
    </Link>
  );
};

export default ButtonAddLink;
