import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.css';
import Navlink from './Navlink';
import { useNavigate } from 'react-router-dom';
import { logout } from 'Auth/store/actions';
import { useState } from 'react';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = async (e) => {
    await dispatch(logout());
    navigate('/login');
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Navlink to="/" label="Inicio" />
          </li>
          <li>
            <Navlink to="/products" label="Productos" />
          </li>
          {user && (
            <li>
              <Navlink to="/providers" label="Proveedores" />
            </li>
          )}
        </ul>
        {user ? (
          <div className={styles.dropdown}>
            <button
              type="button"
              onClick={toggleMenuVisibility}
              className={styles.dropdown_button}
            >
              {user.fullName} {isMenuVisible ? <>&#x25B2;</> : <>&#x25BC;</>}
            </button>
            <div
              className={`${styles.dropdown__menu} ${
                isMenuVisible && styles.active
              }`}
            >
              <div className={styles.dropdown__menu__item} onClick={signout}>
                Cerrar sesión
              </div>
            </div>
          </div>
        ) : (
          <Navlink to="/login" label="Ingresar" />
        )}
      </nav>
    </header>
  );
};

export default Header;
