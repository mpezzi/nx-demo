import React from 'react';
import { dog } from '@nx-demo/dog';
import { cat } from '@nx-demo/cat';

import './app.scss';

export const App = () => {
  return (
    <div className="app">
      <div className="container text-center">
        <h1>
          pear <small>react 16.x</small>
        </h1>
        <ul className="animals list-unstyled">
          {
            [dog, cat].map(a => <li key={a}>{a}</li>)
          }
        </ul>
        <button className="btn btn-primary">
          Done
        </button>
      </div>
    </div>
  );
};

export default App;
