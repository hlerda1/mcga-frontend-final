import styles from './Input.module.css';

const ProdInput = ({
  register,
  type,
  placeholder,
  name,
  rules,
  label,
  className,
  errors,
  ...props
}) => {
  return (
    <div className={`${styles.formControl} ${className || ''}`}>
      <label htmlFor={name} className={styles.label}>{label || placeholder}</label>
      <input
        {...props}
        {...register(`${name}`, rules)}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={styles.input}
      />
      {errors?.[name] && (
        <span className={styles.errorInputMessage}>{errors[name].message}</span>
      )}
    </div>
  );
};

export default ProdInput;
