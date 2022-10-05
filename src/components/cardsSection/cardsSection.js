import img1 from '../../assets/images/1.webp';
import img2 from '../../assets/images/2.webp';
import img3 from '../../assets/images/3.webp';
import img4 from '../../assets/images/4.webp';
import img5 from '../../assets/images/5.webp';
import img6 from '../../assets/images/6.webp';
import img7 from '../../assets/images/7.webp';
import img8 from '../../assets/images/8.webp';
import img9 from '../../assets/images/9.webp';
import img10 from '../../assets/images/10.webp';
import img11 from '../../assets/images/11.webp';
import img12 from '../../assets/images/12.webp';

import { Card } from './card/card';

import styles from './cardsSection.module.css';

export const CardsSection = ({ data }) => {
  return (
    <section className={styles.cardsSection}>
      <p className={styles.quantity}>
        Всего объектов: <span>{data.length}</span>
      </p>
      {data.length ? (
        <div className={styles.cards}>
          {data.map(({ id, title, region, img }) => (
            <Card key={id} title={title} region={region} img={img} />
          ))}
        </div>
      ) : (
        <p className={styles.text}>По вашему запросу ничего не найдено</p>
      )}
    </section>
  );
};
