import styles from './home.module.css';

const Home = () => {
  document.title = 'Inicio';

  return <div className={styles.home}>
    <h1>Bienvenido</h1>
    <h2>Universidad Abierta Interamericana 2022</h2>
    <h3>MCGA Parcial 2 - Lerda y Quispe</h3>
  </div>
};

export default Home;
