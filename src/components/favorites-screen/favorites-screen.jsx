import React from 'react';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {useSelector} from 'react-redux';

const FavoritesScreen = () => {

  const {cards} = useSelector((state) => state.DATA);

  const favoritesCards = cards.filter((card) => (card.is_favorite));
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

          {favoritesCards.length === 0 ? <FavoritesEmpty /> : <FavoritesList favoritesCards={favoritesCards}/>}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesScreen;
