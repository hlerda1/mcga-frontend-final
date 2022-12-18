import styles from './Card.module.css';

const Card = ({ children, header, footer, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.card_content}>
        <div className={styles.card__header}>{header}</div>
        <div className={styles.card__body}>{children}</div>
        <div className={styles.card__footer}>{footer}</div>
      </div>
    </div>
  );
};

export default Card;
