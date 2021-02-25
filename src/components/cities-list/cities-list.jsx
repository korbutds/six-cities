import React from 'react';
import {connect} from 'react-redux';
import {getCitySortedPlaces} from '../../utils';
import CitiesCard from '../cities-card/cities-card';
import PropTypes from 'prop-types';
import cardPropTypes from '../cities-card/cities-card.prop';
import Map from '../map/map';

const CitiesList = (props) => {
  const {cards, onCursorHandle, currentCity, cardId} = props;

  const sortedPlacesByCities = getCitySortedPlaces(cards);

  const currentCityPlaces = sortedPlacesByCities[currentCity];
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentCityPlaces.length} {currentCityPlaces.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {currentCityPlaces.map((card) => <CitiesCard card={card} onCursorHandle={onCursorHandle} key={card[`id`]} />) }
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={currentCity} points={currentCityPlaces} cardId={cardId}/>
        </div>
      </div>
    </div>
  );
};

CitiesList.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes),
  currentCity: PropTypes.string.isRequired,
  cardId: PropTypes.number,
  onCursorHandle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.location,
  cards: state.cards,
  onCursorHandle: PropTypes.func
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
