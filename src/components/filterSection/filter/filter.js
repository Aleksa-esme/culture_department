import styles from './filter.module.css';

export const Filter = ({ list, name, title, options }) => {
  return (
    <div className={styles.filter}>
      <input list={list} id={name} name={name} placeholder={title} className={styles.input} />
      <datalist id={list} className={styles.datalist}>
        {options.map((option) => (
          <option key={option} className={styles.option}>
            {option}
          </option>
        ))}
      </datalist>
    </div>
  );
};
