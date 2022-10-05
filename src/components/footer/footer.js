import { ReactComponent as BuildingIcon } from '../../assets/svg/building.svg';
import { Text } from '../text/text';

import styles from './footer.module.css';

const text = [
  'Государственный Российский\nДом народного творчества\nимени В.Д. Поленова',
  'Контакты',
  'Москва, Сверчков пер., 8, стр. 3.',
  'Тел.: +7 495 628-40-87',
];

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.building}>
          <BuildingIcon />
          <Text text={text[0]} />
        </div>
        <div>
          <Text text={text[1]} />
          <div className={styles.address}>
            <Text text={text[2]} size="small" />
            <Text text={text[3]} size="small" />
          </div>
        </div>
        <div>
          <img
            src={require('../../assets/images/committee.webp')}
            alt="Комитет по сохранению нематериального культурного наследия"
          />
        </div>
      </div>
    </div>
  );
};
