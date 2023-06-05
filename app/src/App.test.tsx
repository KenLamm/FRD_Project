<<<<<<< HEAD
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./pages/app/App";
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './pages/App';
>>>>>>> 3dd256bbab833ae5ca67d35fc9f780e27e2c8a68

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
