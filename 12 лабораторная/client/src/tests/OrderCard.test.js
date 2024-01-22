import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Card from "../components/order/Card";
import { MemoryRouter } from "react-router-dom";

describe("CardOrder component", () => {
  const order = {
    service: "Test Service",
    properties: { prop1: "value1", prop2: "value2" },
    quantity: 3,
    totalPrice: 150,
  };

  it("renders Card component with order details", () => {
    const { getByText } = render(<Card order={order} />);

    expect(getByText(`${order.service} Order`)).toBeInTheDocument();

    Object.entries(order.properties).forEach(([key, value]) => {
      expect(getByText(`${key}: ${value}`)).toBeInTheDocument();
    });

    expect(getByText(`Quantity:`)).toBeInTheDocument();
    expect(getByText(`${order.quantity}`)).toBeInTheDocument();

    expect(getByText(`Total Price:`)).toBeInTheDocument();
    expect(getByText(`$${order.totalPrice}`)).toBeInTheDocument();
  });
  it("OrderCard component matches snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Card order={order} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
