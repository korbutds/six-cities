import React from 'react';
import NearPlacesCard from '../near-places-card/near-places-card';
import PropTypes from 'prop-types';

const NearPlacesList = ({cards, onCursor}) => {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {cards.map((card, id) => <NearPlacesCard card={card} key={`${id}-nearCard`} onCursor={onCursor}/>)}
      </div>
    </section>
  );
};

NearPlacesList.propTypes = {
  cards: PropTypes.array,
  onCursor: PropTypes.func
};

export default NearPlacesList;
