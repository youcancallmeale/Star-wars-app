import React from 'react';

import './loading.scss';
let loaderImg = require('../../view/img/loader.gif');


const Loading = () => {
  return (
    <div className="container">
      <img className="container__loader" src={loaderImg} alt="Loading..." />
      Loading...
    </div>
  );
}

export default Loading;