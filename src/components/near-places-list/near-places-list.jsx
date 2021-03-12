import React, {useEffect} from 'react';
import NearPlacesCard from '../near-places-card/near-places-card';
import PropTypes from 'prop-types';
import LoaderScreensaver from '../loading/loading';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNearPlacesList} from '../../store/api-actions';

const NearPlacesList = ({cardId}) => {
  const dispatch = useDispatch();
  const {nearPlaces: cards, isNearPlacesLoaded} = useSelector((state) => state.CURRENT_OFFER);

  useEffect(() => {
    dispatch(fetchNearPlacesList(cardId));
  }, [cardId]);

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
