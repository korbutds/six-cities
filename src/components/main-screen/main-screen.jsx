import React from 'react';
import Places from '../places/places';
import Header from '../header/header';

const MainScreen = () => {
  return (
    <div className="page page--gray page--main">
      <Header isMainPage={true}/>
      <Places />
    </div>
  );
};

export default MainScreen;

