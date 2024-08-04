import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer, { a,b } from '../footer/footer';

describe("searching some comennet", () => {
  it("should render Footer component correctly and veruf that counts there", async () => {
    let color = {
      footer: 'red',
    }
    render(<Footer color={color} />);
    const element = await screen.findByText('count is 0'); // Corrected the text to match the component
    expect(element).toBeInTheDocument();
  });
});