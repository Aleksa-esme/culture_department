import styles from './filter.module.css';

export const Filter = ({ list, name, title, options, filterFunc }) => {
  return (
    <div className={styles.filter}>
      <select
        onChange={(e) => {
          filterFunc(e.target.value);
        }}
        className={styles.input}
        aria-label={name}
      >
        <option value="All">{title}</option>
        {options.map((option) => (
          <option key={option} className={styles.option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
