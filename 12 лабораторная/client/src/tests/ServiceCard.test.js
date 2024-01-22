import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Card from '../components/service/Card';

describe('Card component', () => {
  const mockProps = {
    name: 'Test Card',
    imageUrl: 'test-image.jpg',
    onDetailsClick: jest.fn(),
    onMakeOrderClick: jest.fn(),
  };

  it('renders the Card component with correct content', () => {
    const { getByText, getByAltText } = render(<Card {...mockProps} />);

    expect(getByText(mockProps.name)).toBeInTheDocument();

    expect(getByAltText(mockProps.name)).toBeInTheDocument();
    expect(getByAltText(mockProps.name).getAttribute('src')).toBe(mockProps.imageUrl);

    expect(getByText('Read More')).toBeInTheDocument();
    expect(getByText('Order')).toBeInTheDocument();
  });

  it('calls onDetailsClick when "Read More" button is clicked', () => {
    const { getByText } = render(<Card {...mockProps} />);
    const readMoreButton = getByText('Read More');

    fireEvent.click(readMoreButton);

    expect(mockProps.onDetailsClick).toHaveBeenCalled();
  });

  it('calls onMakeOrderClick when "Order" button is clicked', () => {
    const { getByText } = render(<Card {...mockProps} />);
    const orderButton = getByText('Order');

    fireEvent.click(orderButton);

    expect(mockProps.onMakeOrderClick).toHaveBeenCalled();
  });
  it('ServiceCard component matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Card {...mockProps} />
        </MemoryRouter>
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
