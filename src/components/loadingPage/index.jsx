import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';
import './style.css';

function LoadingPage() {
  return (
    <>

      <div id='loader'>
      <Rings ariaLabel="loading-indicator" color='white' style={{height: '400px' }}/>
      </div>
    </>
  );
}

export default LoadingPage;
