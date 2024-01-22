import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/shared/Header';

describe('Header component', () => {
  it('should navigate to the home page on logo click', async () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerComponent = container.querySelector('.logo-header');

    fireEvent.click(headerComponent);

    expect(window.location.pathname).toBe('/');
  });
  it('loads the user avatar image', async () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Ждем, пока изображение загрузится (может потребоваться время)
    const userAvatar = await waitFor(() => getByAltText('User-avatar'));

    expect(userAvatar).toBeTruthy();
  });
  it('Header component matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});

