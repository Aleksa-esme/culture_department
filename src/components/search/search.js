import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';

import classNames from 'classnames';
import styles from './search.module.css';

export const Search = ({ title, size = 'big', searchFunc }) => {
  const cnSearch = classNames(styles.search, styles[size]);

  return (
    <div className={cnSearch}>
      <form className={styles.searchForm} action="#">
        <input
          className={styles.searchInput}
          type="text"
          placeholder={title}
          onChange={(e) => {
            searchFunc(e.target.value);
          }}
        />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
