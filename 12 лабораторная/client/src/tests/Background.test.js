import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import Background from '../components/shared/Background';

describe('Background component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Background />);
    expect(container.querySelector('.background')).toBeTruthy();
  });
  it('Background component matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Background />
        </MemoryRouter>
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
