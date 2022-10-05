import { navLinks } from './data';
import styles from './header.module.css';

export const Header = () => {
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
      </div>
    </header>
  );
};
