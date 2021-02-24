import React from 'react';
import cardsPropTypes from '../places/places.prop.js';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import Header from '../header/header';
import {connect} from 'react-redux';

const MainScreen = (props) => {
  const {cards} = props;
  return (
    <div className="page page--gray page--main">
      <Header isMainPage={true}/>
      {cards.length > 0 ? <Places cards = {cards} /> : <NoPlaces />}
    </div>
  );
};

MainScreen.propTypes = {
  cards: cardsPropTypes
};

const mapStateToProps = (state) => ({
  cards: state.cards,
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

