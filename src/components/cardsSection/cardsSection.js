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
