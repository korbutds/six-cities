import PropTypes from 'prop-types';
import React from 'react';

const Image = ({image}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string
};

export default Image;
