import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from 'styled-components';
import {Colors} from '../../const';

const LoaderScreensaver = () => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <FallbackContainer>
          <Loader
            type={`Oval`}
            color={Colors.SITE_BLUE}
            height={100}
            width={100}
          />
        </FallbackContainer>
      </div>
    </div>
  );
};

export default LoaderScreensaver;

const FallbackContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)
`;
