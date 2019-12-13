import { cat } from '@nx-demo/cat';
import { dog } from '@nx-demo/dog';
import { render } from '@testing-library/react';
import React from 'react';

import App from './app';

describe('App', () => {

  it('should render successfully', () => {

    const { baseElement } = render(
      <App />
    );

    expect(baseElement).toBeTruthy();

  });

  it('should have pear as the title', () => {

    const { getByText } = render(
      <App />
    );

    expect(getByText('pear')).toBeTruthy();

  });

  it('should display animals', () => {

    const { getByText } = render(
      <App />
    );

    expect(getByText(dog)).toBeTruthy();
    expect(getByText(cat)).toBeTruthy();

  });

});
