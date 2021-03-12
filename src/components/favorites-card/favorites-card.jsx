import React from 'react';
import {useDispatch} from 'react-redux';
import {changeFavoriteFlag} from '../../store/action.js';
import {sendFavoriteStatus} from '../../store/api-actions.js';
import cardPropTypes from '../cities-card/cities-card.prop.js';


const FavoritesCard = ({card}) => {
  const {preview_image: previewImage, is_premium: isPremium, price, title, type, rating, is_favorite: isFavorite, id} = card;
  const ratingInPercents = rating * 10 * 2 + `%`;
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    const isFavoriteCard = Number(!isFavorite);

    dispatch(changeFavoriteFlag());
    dispatch(sendFavoriteStatus(id, isFavoriteCard));
  };

  return (
    <article className="favorites__card place-card">
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} onClick={handleFavoriteClick} type="button">
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoritesCard.propTypes = {
  card: cardPropTypes
};

export default FavoritesCard;
