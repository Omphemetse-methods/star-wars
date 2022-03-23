import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { AuthProvider } from "../context/AuthProvider";
import SignIn from "./SignIn";

test("intial render submit button is enabled", () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </MemoryRouter>
  );

  expect(screen.getByRole("button", { Name: "Sign In" })).toBeEnabled();
});
