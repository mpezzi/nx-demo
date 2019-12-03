import React from 'react';
import { dog } from '@nx-demo/dog';
import { cat } from '@nx-demo/cat';

import './app.scss';

export const App = () => {
  return (
    <div className="app">
      <h1>
        pear
      </h1>
      <ul>
        {
          [dog, cat].map(a => <li key={a}>{a}</li>)
        }
      </ul>
    </div>
  );
};

export default App;
