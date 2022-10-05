import { Text } from '../text/text';
import { Search } from '../search/search';
import { Filter } from './filter/filter';
import { Button } from '../button/button';

import styles from './filterSection.module.css';

const getUniqueList = (array, prop) => {
  const newArray = array.map((el) => el[prop]);
  return [...new Set(newArray.sort())];
};

export const FilterSection = ({ text, searchFunc, data, filterFunc }) => {
  const filters = [
    { list: 'ethnic', name: 'ethnic-choice', title: 'Все этносы', options: [] },
    { list: 'category', name: 'category-choice', title: 'Все категории', options: [] },
    {
      list: 'region',
      name: 'region-choice',
      title: 'Все регионы',
      options: getUniqueList(data, 'region'),
    },
    { list: 'language', name: 'language-choice', title: 'Все языки', options: [] },
    { list: 'tag', name: 'tag-choice', title: 'Все теги', options: [] },
    { list: 'author', name: 'author-choice', title: 'Все авторы', options: [] },
  ];

  return (
    <section className={styles.filterSection}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div>
            <p className={styles.lightText}>Главная</p>
            <Text text={text} />
          </div>
          <Search title="Контекстный поиск" size="small" searchFunc={searchFunc} />
        </div>
        <div className={styles.filters}>
          {filters.map(({ list, name, title, options }) => (
            <Filter key={list} name={name} title={title} options={options} filterFunc={filterFunc} />
          ))}
        </div>
        <Button />
      </div>
    </section>
  );
};
