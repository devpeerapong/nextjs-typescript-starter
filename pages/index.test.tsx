import { render } from "@testing-library/react";

import Home from "./index";

describe("Home page", () => {
  it("display title correctly", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("title")).toHaveTextContent(/Next.js!/i);
  });
});
