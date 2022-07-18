import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeCircles } from 'react-loader-spinner';
import './style.css';

function LoadingPage() {
  return (
    <>

      <div id='loader'>
        <ThreeCircles
          color="blue"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
        />
      </div>
    </>
  );
}

export default LoadingPage;
