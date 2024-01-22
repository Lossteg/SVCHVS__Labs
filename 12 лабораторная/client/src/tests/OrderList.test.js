import React from 'react';
import { render } from '@testing-library/react';
import OrderList from '../components/order/OrderList';

jest.mock('../api/orderAPI', () => ({
  getOrder: jest.fn().mockResolvedValue([]), 
}));

describe('OrderList component', () => {
  it('matches snapshot', async () => {
    const { asFragment, findByText } = render(<OrderList header="Test Header" />);
    
    await findByText('You\'ve made no orders yet');

    expect(asFragment()).toMatchSnapshot();
  });
});
