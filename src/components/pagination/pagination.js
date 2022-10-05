import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg';
import classNames from 'classnames';

import styles from './pagination.module.css';

export const Pagination = () => {
  const cnLeft = classNames(styles.button, styles.left);
  const cnRight = classNames(styles.button, styles.right, styles.activeButton);
  const cnActive = classNames(styles.page, styles.activePage);
  return (
    <div className={styles.pagination}>
      <button className={cnLeft}>
        <ArrowIcon />
      </button>
      <ul className={styles.pages}>
        <li className={cnActive}>
          <a href="#">
            <span>1</span>
          </a>
        </li>
        <li className={styles.page}>
          <a href="#">
            <span>2</span>
          </a>
        </li>
      </ul>
      <button className={cnRight}>
        <ArrowIcon />
      </button>
    </div>
  );
};
