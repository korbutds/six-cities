import React from 'react';
import cardsPropTypes from '../places/places.prop.js';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import Header from '../header/header';
const MainScreen = ({cards}) => {

  return (
    <div className="page page--gray page--main">
      <Header isLogged={false} isMainPage={true}/>
      {cards.length > 0 ? <Places cards = {cards} /> : <NoPlaces />}
    </div>
  );
};

MainScreen.propTypes = {
  cards: cardsPropTypes
};


export default MainScreen;
