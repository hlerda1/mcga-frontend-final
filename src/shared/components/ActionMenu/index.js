import { useState } from 'react';
import styles from './ActionMenu.module.css';

const ActionMenu = ({ buttons }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onToggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.actionButton}
        onClick={onToggleMenu}
        type="button"
      >
        ...
      </button>
      <div
        className={`${styles['dropdown-content']} ${
          isMenuVisible ? styles['dropdown-content--visible'] : ''
        }`}
      >
        {buttons}
      </div>
    </div>
  );
};

export default ActionMenu;
