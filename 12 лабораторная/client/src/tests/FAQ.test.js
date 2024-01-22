import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FAQ from '../pages/FAQ';

describe('FAQ component', () => {
  it('renders without crashing', () => {
    render(
        <MemoryRouter>
          <FAQ />
        </MemoryRouter>
    );
    // Проверяем, что компонент успешно отрендерился
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });
  it('displays FAQ questions and answers', () => {
    render(
        <MemoryRouter>
          <FAQ />
        </MemoryRouter>
    );

    const questions = [
      'What printing services do you offer?',
      'How can I place an order?',
      'What file formats do you accept for printing?',
      'Can I get a quote for my printing project?',
    ];
    questions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });
  it('FAQ component matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <FAQ />
        </MemoryRouter>
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
