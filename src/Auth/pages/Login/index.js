import { useForm } from 'react-hook-form';
import ProdInput from 'shared/components/Input';
import Button from 'shared/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'Auth/store/thunks';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      usernameOrEmail: null,
      password: null,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search: queryParam } = useLocation();
  const redirectTo = queryParam?.split('=')[1];
  const { isLoadingAuth } = useSelector((state) => state.auth);

  const onSubmit = async (credentials) => {
    try {
      await dispatch(login(credentials));
      navigate(redirectTo || '/');
    } catch (error) {
      setError('usernameOrEmail', { message: 'Credenciales erróneas' });
      setError('password', { message: 'Credenciales erróneas' });
    }
  };

  return (
    <div className={styles.loginPage}>
      <h1>Iniciá sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.frmLogin}>
        <ProdInput
          register={register}
          name="usernameOrEmail"
          label="Nombre o correo electrónico"
          rules={{ required: 'Nombre o correo electrónico requerido' }}
          errors={errors}
        />

        <ProdInput
          register={register}
          name="password"
          label="Contraseña"
          type="password"
          rules={{ required: 'Contraseña requerida' }}
          errors={errors}
        />

        <Button text="Ingresar" type="submit" loading={isLoadingAuth} />
      </form>
    </div>
  );
};

export default Login;
