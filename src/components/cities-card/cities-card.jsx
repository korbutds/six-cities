import React from 'react';
import {Link} from 'react-router-dom';
import cardPropTypes from './cities-card.prop';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {sendFavoriteStatus} from '../../store/api-actions';
import {changeFavoriteFlag} from '../../store/action';
import browserHistory from '../../browser-history';
import {AuthorizationStatus, RoutePathes} from '../../const';

const CitiesCard = ({card, onCursorHandle}) => {
  const {id, preview_image: previewImage, is_premium: isPremium, price, title, type, rating, is_favorite: isFavorite} = card;
  const ratingInPercents = rating * 10 * 2 + `%`;

  const {isFavoriteStatusChanged} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const handleCursorHover = () => {
    onCursorHandle(id);
  };
  const handleCursorOut = () => {
    onCursorHandle(null);
  };

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(RoutePathes.LOGIN_SCREEN);
    } else {
      const currentCard = Object.assign({},
          card,
          {
            'is_favorite': !card[`is_favorite`]
          }
      );

      const isFavoriteCard = currentCard[`is_favorite`] ? 1 : 0;

      dispatch(changeFavoriteFlag());
      dispatch(sendFavoriteStatus(currentCard, isFavoriteCard));
    }
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleCursorHover} onMouseLeave={handleCursorOut}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : `` } button`} onClick={handleFavoriteClick} type="button" disabled={!isFavoriteStatusChanged}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: ratingInPercents
              }}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link href="#" to={`/offer/${id}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

CitiesCard.propTypes = {
  card: cardPropTypes,
  onCursorHandle: PropTypes.func.isRequired
};

export default CitiesCard;
