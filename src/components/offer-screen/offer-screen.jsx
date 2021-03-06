import React, {useEffect, useState} from 'react';
import {makeFirstLetterUC} from '../../utils';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import PropTypes from 'prop-types';
import CommentForm from '../comment-form/comment-form';
import NearPlacesList from '../near-places-list/near-places-list';
import OffersList from '../offers-list/offers-list';
import cardsPropTypes from '../places/places.prop';
import commentPropTypes from '../reviews/comments.prop.js';
import Map from '../map/map';
import {connect} from 'react-redux';
import LoaderScreensaver from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {ActionCreators} from '../../store/action';

const ImageComponent = ({image}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  );
};

const OfferScreen = ({cards, comments, apartmentId, isCardsLoaded, nearPlaces, onLocationChange}) => {
  if (!isCardsLoaded) {
    return <LoaderScreensaver />;
  }

  const card = cards.find(({id}) => {
    return id === parseFloat(apartmentId);
  });

  if (!card) {
    return <NotFoundScreen />;
  }

  const {
    id,
    images,
    is_premium: isPremium,
    is_favorite: isFavorite,
    title,
    rating,
    bedrooms,
    type,
    max_adults: maxAdults,
    price,
    goods,
    host,
    description,
    city
  } = card;

  onLocationChange(city.name);

  const [cardId, setNearCardId] = useState(null);
  useEffect(() => scrollTo({top: 0, left: 0, behavior: `smooth`}), [id]);

  const getNearCardId = (handleId) => setNearCardId(handleId);
  const contentImages = images.slice(0, 6);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {contentImages.map((image, i) => (<ImageComponent image={image} key={`${card.id}-${i}-photo`}/>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : `` }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: `${rating * 20}%`
                  }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {makeFirstLetterUC(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <OffersList offers={goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host[`is_pro`] && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <Reviews comments={comments}/>
                <CommentForm />
              </section>

            </div>
          </div>
          <Map cards={nearPlaces} cardId={cardId}/>
        </section>
        <div className="container">
          <NearPlacesList cardId={id} onCursor={getNearCardId}/>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  cards: cardsPropTypes,
  comments: commentPropTypes,
  nearPlaces: cardsPropTypes,
  apartmentId: PropTypes.string.isRequired,
  isCardsLoaded: PropTypes.bool.isRequired,
  onLocationChange: PropTypes.func.isRequired
};

ImageComponent.propTypes = {
  image: PropTypes.string
};

const mapStateToProps = ({cards, isCardsLoaded, nearPlaces}) => ({
  cards,
  isCardsLoaded,
  nearPlaces
});

const mapDispatchToProps = (dispatch) => ({
  onLocationChange(location) {
    dispatch(ActionCreators.setLocation(location));
  }
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
