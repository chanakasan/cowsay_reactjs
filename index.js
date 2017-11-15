import React from 'react';
import ReactDOM from 'react-dom';
import CowBox from './CowBox';

const App = () => 
  <div>
    <h1>Cowsay</h1>
    <hr />
    <CowBox />
  </div>

ReactDOM.render(<App />, document.getElementById('app'))
