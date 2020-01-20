import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <span>Oh No!! We've got a problem!</span>
      <Link to="/" >Restart</Link>
    </div>
  );
}

export default ErrorPage;