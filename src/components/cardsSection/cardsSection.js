import { Card } from './card/card';
import { cards } from '../../db';

import styles from './cardsSection.module.css';

export const CardsSection = () => {
  return (
    <section className={styles.cardsSection}>
      <p className={styles.quantity}>
        Всего объектов: <span>{cards.length}</span>
      </p>
      <div className={styles.cards}>
        {cards.map(({ id, title, region, img }) => (
          <Card key={id} title={title} region={region} img={img} />
        ))}
      </div>
    </section>
  );
};
