import React, {useEffect} from 'react';
import NearPlacesCard from '../near-places-card/near-places-card';
import PropTypes from 'prop-types';
import LoaderScreensaver from '../loading/loading';
import {connect} from 'react-redux';
import {fetchNearPlacesList} from '../../store/api-actions';

const NearPlacesList = ({cards, cardId, isNearPlacesLoaded, onLoadNearPlaces}) => {
  useEffect(() => {
    onLoadNearPlaces(cardId);
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
  cards: PropTypes.array.isRequired,
  isNearPlacesLoaded: PropTypes.bool.isRequired,
  onLoadNearPlaces: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired
};

const mapStateToProps = ({DATA}) => ({
  isNearPlacesLoaded: DATA.isNearPlacesLoaded,
  cards: DATA.nearPlaces
});

const mapDispatchToProps = (dispatch) => ({
  onLoadNearPlaces(id) {
    dispatch(fetchNearPlacesList(id));
  }
});

export {NearPlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(NearPlacesList);
