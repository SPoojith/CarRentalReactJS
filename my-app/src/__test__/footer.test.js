import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer, { a,b,c } from '../footer/footer';

describe("Footer component", () => {
  it("should render Footer component correctly", async () => {
    let color = {
      footer: 'red',
    }
    render(<Footer color={color} />);
    const element = await screen.findByText('this if footer'); // Corrected the text to match the component
    expect(element).toBeInTheDocument();
  });
});

describe("multiplier", () => {
    it("should render Footer multi correctly", async () => {
      let color = {
        footer: 'red',
      }
      render(<Footer color={color} />);
      const element = await screen.findByText('this if footer'); // Corrected the text to match the component
      expect(element).toBeInTheDocument();
    });
  });

  describe('multiplier functional component', () => {
    it('should multiply the input by itself', () => {
      // Test case 1: Positive number
      expect(a(5)).toBe(5*5);
      
      // Test case 2: Negative number
      expect(a(-3)).toBe(-3*-3);
      
      // Test case 3: Zero
      expect(a(0)).toBe(0);
      
      // Additional test cases can be added as needed
    });
  });

  describe('complex functional component', () => {
    it('should multiply the input by itself', () => {
        expect(b(2)).toBe((2*2)/2)
      
      // Additional test cases can be added as needed
    });
  });

  describe('complex functional component C', () => {
    it('should return addition of same number', () => {
        expect(c(5)).toBe(10)
      
      // Additional test cases can be added as needed
    });
  });
