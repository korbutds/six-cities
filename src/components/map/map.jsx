import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import cardPropTypes from '../cities-card/cities-card.prop.js';

import "leaflet/dist/leaflet.css";

const Map = ({city, points, cardId}) => {

  console.log(cardId)
  const mapRef = useRef();

  useEffect(() => {
    const cityCoords = city.coords;
    const cityZoom = city.zoom;

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

    points.forEach((point) => {
      const customIcon = point.id !== cardId ? leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      }) : leaflet.icon({
        iconUrl: `./img/pin-active.svg`,
        iconSize: [27, 39]
      });

      console.log(customIcon);

      leaflet.marker({
        lat: point.city.location.latitude,
        lng: point.city.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [city, cardId]);

  return (<section className="property__map map" id="map" ref={mapRef}></section>);
};

Map.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
    zoom: PropTypes.number.isRequired
  }
  ),
  points: PropTypes.arrayOf(
      cardPropTypes
  )
};

export default Map;
