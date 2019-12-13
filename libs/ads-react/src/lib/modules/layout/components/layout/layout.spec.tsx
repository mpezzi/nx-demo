import { render } from '@testing-library/react';
import React from 'react';

import { AdsLayout } from './layout';

describe('AdsLayout', () => {

  it('should render successfully', () => {

    const { baseElement } = render(
      <AdsLayout />
    );

    expect(baseElement).toBeTruthy();

  });

});
