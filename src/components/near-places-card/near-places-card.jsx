import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NearPlacesCard = ({card, onCursor}) => {
  const {id, preview_image: previewImage, is_premium: isPremium, price, title, type, rating, is_favorite: isFavorite} = card;
  const ratingInPercents = rating * 10 * 2 + `%`;
  const handleCursorHover = () => onCursor(id);
  const handleCursorOut = () => onCursor(null);
  return (
    <article className="near-places__card place-card" onMouseEnter={handleCursorHover} onMouseLeave={handleCursorOut}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
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
          <Link href="#" to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

NearPlacesCard.propTypes = {
  card: PropTypes.shape({
    'id': PropTypes.number.isRequired,
    'images': PropTypes.arrayOf(PropTypes.string),
    'is_premium': PropTypes.bool.isRequired,
    'is_favorite': PropTypes.bool.isRequired,
    'title': PropTypes.string.isRequired,
    'preview_image': PropTypes.string.isRequired,
    'rating': PropTypes.number.isRequired,
    'bedrooms': PropTypes.number.isRequired,
    'type': PropTypes.string.isRequired,
    'max_adults': PropTypes.number.isRequired,
    'price': PropTypes.number.isRequired,
    'goods': PropTypes.arrayOf(PropTypes.string),
    'host': PropTypes.shape({
      'id': PropTypes.number.isRequired,
      'name': PropTypes.string.isRequired,
      'is_pro': PropTypes.bool.isRequired,
      'avatar_url': PropTypes.string.isRequired,
    }),
    'description': PropTypes.string.isRequired,
  }),
  onCursor: PropTypes.func
};


export default NearPlacesCard;
