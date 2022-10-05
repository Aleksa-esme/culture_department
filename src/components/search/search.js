import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';

import classNames from 'classnames';
import styles from './search.module.css';

export const Search = ({ title, size = 'big' }) => {
  const cnSearch = classNames(styles.search, styles[size]);
  return (
    <div className={cnSearch}>
      <form className={styles.searchForm} action="#">
        <input className={styles.searchInput} type="text" placeholder={title} />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
