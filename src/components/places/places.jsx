import React from 'react';
import CitiesList from '../cities-list/cities-list';
import LocationList from '../location-list/location-list';
import NoPlaces from '../no-places/no-places';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../../store/action';
import LoaderScreensaver from '../loading/loading';

const Places = () => {
  const {isCardsLoaded, cards} = useSelector((state) => state.DATA);
  const {location} = useSelector((state) => state.SCREEN);
  const dispatch = useDispatch();
  const filtredCards = cards.filter((card) => card.city.name === location);


  const handleCityChange = (evt) => {
    const currentCity = evt.target.innerText;
    dispatch(setLocation(currentCity));
  };

  if (!isCardsLoaded) {
    return (
      <LoaderScreensaver />
    );
  }

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={handleCityChange}/>
        </section>
      </div>
      {filtredCards.length === 0 ? <NoPlaces /> : <CitiesList />}

    </main>
  );
};


export default Places;
