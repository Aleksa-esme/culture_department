import { Text } from '../text/text';
import { Search } from '../search/search';
import { Filter } from './filter/filter';
import { Button } from '../button/button';
import { cards } from '../../db';

import styles from './filterSection.module.css';

const getRegions = (array) => {
  const regions = array.map((el) => el.region);
  return [...new Set(regions.sort())];
};

const filters = [
  { list: 'ethnic', name: 'ethnic-choice', title: 'Все этносы', options: [] },
  { list: 'category', name: 'category-choice', title: 'Все категории', options: [] },
  { list: 'region', name: 'region-choice', title: 'Все регионы', options: getRegions(cards) },
  { list: 'language', name: 'language-choice', title: 'Все языки', options: [] },
  { list: 'tag', name: 'tag-choice', title: 'Все теги', options: [] },
  { list: 'author', name: 'author-choice', title: 'Все авторы', options: [] },
];

export const FilterSection = ({ text }) => {
  return (
    <section className={styles.filterSection}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div>
            <p className={styles.lightText}>Главная</p>
            <Text text={text} />
          </div>
          <Search title="Контекстный поиск" size="small" />
        </div>
        <div className={styles.filters}>
          {filters.map(({ list, name, title, options }) => (
            <Filter key={list} list={list} name={name} title={title} options={options} />
          ))}
        </div>
        <Button />
      </div>
    </section>
  );
};
