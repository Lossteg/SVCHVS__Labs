import React from "react";
import renderer from 'react-test-renderer';
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/shared/Footer";

describe("Header component", () => {
  it("loads the user avatar image", async () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Ждем, пока изображение загрузится (может потребоваться время)
    const userAvatar = await waitFor(() => container.querySelector(".logo-footer"));

    expect(userAvatar).toBeTruthy();
  });
  it('should contain three links with correct text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const aboutUsLink = getByText('About us');
    const faqLink = getByText('FAQ');
    const contactUsLink = getByText('Contact us');

    expect(aboutUsLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();
  });
  it('Footer component matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
