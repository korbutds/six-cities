import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import cardPropTypes from '../cities-card/cities-card.prop.js';
import {CitiesInfo} from '../../const.js';
import {connect} from 'react-redux';

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {city, cards, cardId} = props;
  const mapRef = useRef();

  useEffect(() => {
    const cityCoords = CitiesInfo[city].coords;
    const cityZoom = CitiesInfo[city].zoom;

    mapRef.current = leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true,
    });

    mapRef.current.setView(cityCoords, cityZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    cards.forEach(({id, location, title}) => {
      const customIcon = leaflet.icon({
        iconUrl: `${id === cardId ? `./img/pin-active.svg` : `./img/pin.svg`}`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: location.latitude,
        lng: location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [city, cardId, cards]);

  return (<section className="property__map map" id="map" ref={mapRef}></section>);
};

Map.propTypes = {
  city: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
      cardPropTypes
  ),
  cardId: PropTypes.number
};

const mapStateToProps = ({location}) => ({
  city: location,
});

export {Map};

export default connect(mapStateToProps)(Map);
