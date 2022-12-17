import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ size = 'normal' }) => {
  return (
    <div className={`${styles['lds-ring']} ${size === 'small' ? styles['ls-small'] : ''}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
