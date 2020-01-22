import React from 'react';

import Game from './components/Game/game';
import Start from './components/Start/start';
import './view/styles/styles.scss';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Start}></Route>
        <Route path="/game" component={Game}></Route>
      </Switch> 
      <div className="main__floor"></div>
    </div>
  );

}

export default App;