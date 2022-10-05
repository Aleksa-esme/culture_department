import classNames from 'classnames';
import styles from './text.module.css';

export const Text = ({ text, size = 'medium' }) => {
  const cnText = classNames(styles.text, styles[size]);
  return <p className={cnText}>{text}</p>;
};
