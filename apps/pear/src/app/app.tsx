import React from 'react';
import { dog } from '@nx-demo/dog';
import { cat } from '@nx-demo/cat';
import { AdsLayout, AdsLayoutAside, AdsLayoutContent } from '@nx-demo/ads-react';

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
            <em>React 16.x</em>
          </p>
        </div>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="/apple" className="nav-link">
              Apple
            </a>
          </li>
          <li className="nav-item">
            <a href="/orange" className="nav-link">
              Orange
            </a>
          </li>
          <li className="nav-item">
            <a href="/pear" className="nav-link active">
              Pear
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
