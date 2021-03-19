import React, {useEffect} from 'react';
import {makeFirstLetterUC} from '../../utils';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import PropTypes from 'prop-types';
import CommentForm from '../comment-form/comment-form';
import NearPlacesList from '../near-places-list/near-places-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {useDispatch, useSelector} from 'react-redux';
import LoaderScreensaver from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Image from '../image/image';
import browserHistory from '../../browser-history';
import {AuthorizationStatus, FetchStatus, RoutePathes} from '../../const';
import {fetchCurrentOffer, fetchNearPlacesList, sendFavoriteOfferScreenStatus} from '../../store/current-offer-data/api-actions';
import {changeFetchStatus, clearCurrentOffer} from '../../store/current-offer-data/actions';

const OfferScreen = ({apartmentId}) => {

  const dispatch = useDispatch();

  const card = useSelector((state) => state.CURRENT_OFFER.currentOffer);
  const isOfferLoaded = useSelector((state) => state.CURRENT_OFFER.isOfferLoaded);
  const nearPlaces = useSelector((state) => state.CURRENT_OFFER.nearPlaces);
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const fetchStatus = useSelector((state) => state.DATA.fetchStatus);

  useEffect(() => {
    dispatch(fetchCurrentOffer(apartmentId));
    dispatch(fetchNearPlacesList(apartmentId));

    return () => {
      dispatch(clearCurrentOffer());
    };
  }, [apartmentId]);

  if (!isOfferLoaded) {
    return <LoaderScreensaver />;
  }

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
  } = card;

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(RoutePathes.LOGIN_SCREEN);
    } else {
      const isFavoriteCard = Number(!isFavorite);
      dispatch(sendFavoriteOfferScreenStatus(id, isFavoriteCard));
      dispatch(changeFetchStatus(FetchStatus.SENDING));
    }
  };

  const contentImages = images.slice(0, 6);

  const nearPlacesMapCards = nearPlaces.slice();
  nearPlacesMapCards.push(card);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {contentImages.map((image, i) => (<Image image={image} key={`${card.id}-${i}-photo`}/>))}
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
                <button
                  className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`}
                  type="button"
                  onClick={handleFavoriteClick}
                  disabled={fetchStatus === FetchStatus.SENDING}>

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
                <Reviews />
                <PrivateRoute component={() => <CommentForm id={id} />} noAuth={() => ``}/>
              </section>

            </div>
          </div>
          <Map cards={nearPlacesMapCards} cardId={id}/>
        </section>
        <div className="container">
          <NearPlacesList cardId={id} />
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  apartmentId: PropTypes.string.isRequired,
};

export default OfferScreen;
