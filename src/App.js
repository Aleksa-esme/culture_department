import CARDS from './cards.json';
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

  const filterElements = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredByTitle = CARDS.filter((el) => {
    if (searchTerm === '') {
      return el;
    } else if (el.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      return el;
    }
  });

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section className={styles.nameSection}>
          <Text text={text[0]} size="big" />
          <Search title="Поиск" />
        </section>
        <FilterSection text={text[1]} searchFunc={filterElements} data={CARDS} />
        <CardsSection data={filteredByTitle} />
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default App;
