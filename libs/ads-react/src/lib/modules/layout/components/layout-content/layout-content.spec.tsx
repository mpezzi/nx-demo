import React from 'react';
import { render } from '@testing-library/react';

import { AdsLayoutContent } from './layout-content';

describe('AdsLayoutContent', () => {

  it('should render successfully', () => {

    const { baseElement } = render(
      <AdsLayoutContent />
    );

    expect(baseElement).toBeTruthy();

  });

});
