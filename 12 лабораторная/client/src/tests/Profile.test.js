import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Profile from '../pages/Profile';

test('Profile component matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});