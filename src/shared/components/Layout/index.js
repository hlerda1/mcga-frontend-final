import styles from './Layout.module.css';
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <Body>
        {children}
      </Body>
      <Footer />
    </div>
  )
}

export default Layout;
