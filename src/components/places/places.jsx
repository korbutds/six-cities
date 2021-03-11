import React from 'react';
import CitiesList from '../cities-list/cities-list';
import LocationList from '../location-list/location-list';
import NoPlaces from '../no-places/no-places';
import {getCityFiltredPlaces, getSortedPlaces} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../../store/action';
import LoaderScreensaver from '../loading/loading';

const Places = () => {
  const {cards, sortType, isCardsLoaded} = useSelector((state) => state.DATA);
  const {location: currentCity} = useSelector((state) => state.SCREEN);

  const dispatch = useDispatch();

  const handleCityChange = (evt) => {
    const location = evt.target.innerText;
    dispatch(setLocation(location));
  };

  if (!isCardsLoaded) {
    return (
      <LoaderScreensaver />
    );
  }

  const filteredPlacesByCities = getCityFiltredPlaces(cards);

  const currentCityPlaces = getSortedPlaces(filteredPlacesByCities[currentCity], sortType);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={handleCityChange}/>
        </section>
      </div>
      {currentCityPlaces.length === 0 ? <NoPlaces /> : <CitiesList currentCityPlaces={currentCityPlaces} />}

    </main>
  );
};


export default Places;
