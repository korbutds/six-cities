import React, {useEffect} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import cardPropTypes from '../cities-card/cities-card.prop';
import {CitiesInfo} from '../../const';
import {connect} from 'react-redux';
import {getLocation} from '../../store/screen/selectors';
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {city, cards, cardId} = props;

  useEffect(() => {
    const cityCoords = CitiesInfo[city].coords;
    const cityZoom = CitiesInfo[city].zoom;

    const mapView = leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true,
    });

    mapView.setView(cityCoords, cityZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapView);

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
      .addTo(mapView)
      .bindPopup(title);
    });

    return () => {
      mapView.remove();
    };
  }, [city, cardId, cards]);

  return (<section className="property__map map" id="map" ></section>);
};

Map.propTypes = {
  city: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
      cardPropTypes
  ),
  cardId: PropTypes.number
};

const mapStateToProps = (state) => ({
  city: getLocation(state)
});

export {Map};

export default connect(mapStateToProps)(Map);
