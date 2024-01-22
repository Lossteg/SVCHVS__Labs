import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../components/shared/Logo';

describe('Logo component', () => {
  it('renders without crashing', () => {
    const { getByAltText } = render(<Logo />);
    const companyLogo = getByAltText('Copy-center-logo');
    expect(companyLogo).toBeInTheDocument();
  });
});
