import React from 'react';
import NearPlacesCard from '../near-places-card/near-places-card';
import PropTypes from 'prop-types';
import LoaderScreensaver from '../loading/loading';
import {useSelector} from 'react-redux';

const NearPlacesList = () => {
  const {nearPlaces: cards, isNearPlacesLoaded} = useSelector((state) => state.CURRENT_OFFER);


  if (!isNearPlacesLoaded) {
    return <LoaderScreensaver />;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {cards.map((card, id) => <NearPlacesCard card={card} key={`${id}-nearCard`} />)}
      </div>
    </section>
  );
};

NearPlacesList.propTypes = {
  cardId: PropTypes.number.isRequired
};

export default NearPlacesList;
