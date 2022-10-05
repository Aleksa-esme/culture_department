import classNames from 'classnames';
import { navLinks } from './data';
import styles from './header.module.css';

export const Header = () => {
  const cnButton = classNames('dropdown', styles.menuButton);
  const cnDropdown = classNames('dropdown-menu', styles.dropdownMenu);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navLinks}>
          {navLinks.map(({ title, link }) => (
            <a key={title} href={link} className={styles.navLink}>
              {title}
            </a>
          ))}
        </nav>
        <div className={cnButton}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Меню
          </button>
          <ul className={cnDropdown}>
            {navLinks.map(({ title, link }) => (
              <li key={title} className={styles.menuElement}>
                <a href={link} className={styles.navLink}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
