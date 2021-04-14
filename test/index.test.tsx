import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home page", () => {
  it("display title correctly", () => {
    render(<Home />);

    expect(screen.getByTestId("title")).toHaveTextContent(/Next.js!/i);
  });
});
