import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Nada que hacer acá...</h1>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default NotFound;
