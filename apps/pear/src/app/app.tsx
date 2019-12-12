import React from 'react';
import { dog } from '@nx-demo/dog';
import { cat } from '@nx-demo/cat';
import { AdsLayout, AdsLayoutAside, AdsLayoutContent } from '@nx-demo/ads/react';

import './app.scss';

export const App = () => {
  return (
    <AdsLayout>
      <AdsLayoutAside>
        <div className="text-center">
          <h2>
            pear
          </h2>
          <p className="lead">
            React 16.x
          </p>
        </div>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </AdsLayoutAside>
      <AdsLayoutContent>
        <ul className="animals list-unstyled">
          {[dog, cat].map(a => <li key={a}>{a}</li>)}
        </ul>
        <button className="btn btn-primary">
          Done
        </button>
      </AdsLayoutContent>
    </AdsLayout>
  );
};

export default App;
