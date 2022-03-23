import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

test("renders login button", () => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );

  expect(screen.getByText(/Log in/i)).toBeInTheDocument();
});
