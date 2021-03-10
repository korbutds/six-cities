import React, {useState} from 'react';
import {connect} from 'react-redux';
import CitiesCard from '../cities-card/cities-card';
import PropTypes from 'prop-types';
import cardPropTypes from '../cities-card/cities-card.prop';
import Map from '../map/map';
import Sort from '../sort/sort';

const CitiesList = (props) => {
  const {currentCityPlaces, currentCity} = props;
  const [cardId, setCardId] = useState(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentCityPlaces.length} {currentCityPlaces.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">
            {currentCityPlaces.map((card) => <CitiesCard card={card} onCursorHandle={setCardId} key={card[`id`]} />) }
          </div>
        </section>
        <div className="cities__right-section">
          <Map points={currentCityPlaces} cards={currentCityPlaces} cardId={cardId}/>
        </div>
      </div>
    </div>
  );
};

CitiesList.propTypes = {
  currentCityPlaces: PropTypes.arrayOf(cardPropTypes),
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = ({location}) => ({
  currentCity: location,
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
