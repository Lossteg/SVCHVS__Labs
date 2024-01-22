import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';
import { MemoryRouter } from 'react-router-dom';

describe('AboutUs component', () => {
  it('displays the logo', async () => {
    const { container } = render(
        <MemoryRouter>
          <AboutUs />
        </MemoryRouter>
      );
  
      // Ждем, пока изображение загрузится (может потребоваться время)
      const companyLogo = await waitFor(() => container.querySelector(".logo-about-us"));
  
      expect(companyLogo).toBeTruthy();
  });
  it('FAQ component matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <AboutUs />
        </MemoryRouter>
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
