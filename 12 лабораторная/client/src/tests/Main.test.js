import React from 'react';
import { render } from '@testing-library/react';
import Main from '../pages/Main';
import { MemoryRouter } from 'react-router-dom';

test('Main component matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

