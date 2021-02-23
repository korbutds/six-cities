import React, {useState} from 'react';
import cardPropTypes from '../cities-card/cities-card.prop';
import CitiesList from '../cities-list/cities-list';
import {CitiesInfo} from '../../const.js';
import PropTypes from 'prop-types';
import LocationList from '../location-list/location-list';
import {getCitySortedPlaces} from '../../utils';
import NoPlaces from '../no-places/no-places';

const Places = ({cards}) => {
  const [cardId, setCardId] = useState(null);
  const [currentCity, changeCurrentCity] = useState(CitiesInfo.Amsterdam);
  const handleItemId = (id) => {
    setCardId(id);
  };

  const sortedPlacesByCities = getCitySortedPlaces(cards)

  const currentCityPlaces = sortedPlacesByCities[currentCity.name];
  const handleCityChange = (evt) => {
    evt.preventDefault();
    const city = evt.target.textContent;
    changeCurrentCity(CitiesInfo[city]);
  };

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList currentCity={currentCity} onCityClick={handleCityChange}/>
        </section>
      </div>
      {currentCityPlaces.length === 0 ? <NoPlaces /> : <CitiesList cards={currentCityPlaces} onCursorHandle={handleItemId} currentCity={currentCity} cardId={cardId} />}

    </main>
  );
};

Places.propTypes = {
  cards: PropTypes.arrayOf(
      cardPropTypes
  )
};

export default Places;
