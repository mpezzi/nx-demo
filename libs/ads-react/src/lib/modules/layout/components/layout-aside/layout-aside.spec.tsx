import React from 'react';
import { render } from '@testing-library/react';

import { AdsLayoutAside } from './layout-aside';

describe('AdsLayoutAside', () => {

  it('should render successfully', () => {

    const { baseElement } = render(
      <AdsLayoutAside />
    );

    expect(baseElement).toBeTruthy();

  });

});
