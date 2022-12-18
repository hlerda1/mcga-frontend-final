import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <a
          href="https://github.com/hlerda1/mcga-frontend-final"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width={32}
            alt="GitHub"
          />
        </a>
      </section>
      <section>
        <a href="https://github.com/hlerda1" target="_blank" rel="noreferrer">
          Horacio Lerda
        </a>
        <a href="https://github.com/brquispe" target="_blank" rel="noreferrer">
          Braian Quispe
        </a>
      </section>
    </footer>
  );
};

export default Footer;
