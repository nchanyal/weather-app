import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("<Home />", () => {
  it("should have 'Save and see your changes instantly.'", () => {
    render(<Home />);

    expect(
      screen.getByText("Save and see your changes instantly.")
    ).toBeInTheDocument();
  });
});
