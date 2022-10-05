import styles from './filter.module.css';

export const Filter = ({ name, title, options, filterFunc }) => {
  return (
    <>
      <select
        onChange={(e) => {
          filterFunc(e.target.value);
        }}
        className={styles.input}
        aria-label={name}
      >
        <option className={styles.option} value="All">{title}</option>
        {options.map((option) => (
          <option key={option} className={styles.option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
