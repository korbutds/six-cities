import React from 'react';
import cardsPropTypes from '../places/places.prop.js';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {connect} from 'react-redux';

const FavoritesScreen = ({cards}) => {

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

FavoritesScreen.propTypes = {
  cards: cardsPropTypes
};

const mapStateToProps = ({cards}) => ({
  cards
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
