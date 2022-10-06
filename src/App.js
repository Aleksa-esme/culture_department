import { cards } from './db';
import { useState } from 'react';
import { Header } from './components/header/header';
import { Text } from './components/text/text';
import { Search } from './components/search/search';
import { FilterSection } from './components/filterSection/filterSection';
import { CardsSection } from './components/cardsSection/cardsSection';
import { Pagination } from './components/pagination/pagination';
import { Footer } from './components/footer/footer';

import styles from './app.module.css';

const text = [
  'Реестр объектов нематериального\nкультурного наследия народов россии',
  'Расширенный поиск',
  'Главная',
  'Всего объектов:',
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterParam, setFilterParam] = useState(['All']);
  const [searchParam] = useState(['title']);

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return item[newItem].toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
      } else if (filterParam == 'All') {
        return searchParam.some((newItem) => {
          return item[newItem].toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
    });
  }

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section className={styles.nameSection}>
          <Text text={text[0]} size="big" />
          <Search title="Поиск" />
        </section>
        <FilterSection
          text={text[1]}
          data={cards}
          searchFunc={setSearchTerm}
          filterFunc={setFilterParam}
        />
        <CardsSection data={search(cards)} />
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default App;
