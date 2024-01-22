import React from 'react';
import { render, screen } from '@testing-library/react';
import MakeOrder from '../components/order/MakeOrder';

jest.mock('../api/orderAPI', () => ({
  postOrder: jest.fn().mockResolvedValue({}),
}));

describe('MakeOrder component', () => {
  const serviceMock = {
    name: 'Test Service',
    properties: {
      property1: ['Option1', 'Option2'],
      property2: ['OptionA', 'OptionB'],
    },
    price: {
      property1: { Option1: 10, Option2: 20 },
      property2: { OptionA: 5, OptionB: 15 },
    },
  };

  it('renders without crashing', () => {
    render(<MakeOrder service={serviceMock} onClose={() => {}} />);
    expect(screen.getByText('Make an Order')).toBeInTheDocument();
  });
});