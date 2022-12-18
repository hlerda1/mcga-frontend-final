import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Navlink = ({ className, to, label }) => {
  return <NavLink className={`${styles.navlink} ${className}`} to={to}>{ label }</NavLink>
}

export default Navlink;
