import { Controller } from 'react-hook-form';
import styles from './SelectInput.module.css';

const SelectInput = ({
  name,
  control,
  rules,
  errors,
  className,
  options,
  label,
  optionValue,
  optionLabel,
  ...props
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field, fieldState }) => (
        <div className={styles.selectInputWrapper}>
          <label htmlFor={field.name}>{label || field.name}</label>
          <select
            {...props}
            id={field.name}
            name={field.name}
            title={label || field.name}
            onChange={field.onChange}
            value={field.value || undefined}
            className={`${styles.selectInput} ${className}`}
          >
            <option></option>
            {options?.map((option) => (
              <option
                id={option[optionValue]}
                key={option[optionValue]}
                value={option[optionValue]}
              >
                {option[optionLabel]}
              </option>
            ))}
          </select>

          {fieldState.error && (
            <span className={styles.errorInputMessage}>
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default SelectInput;
