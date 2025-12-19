import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";
import { WeatherProvider } from "@/Context/WeatherProvider";

describe("<Main />", () => {
  it("should render", () => {
    render(
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );
  });

  it("should render a search field", () => {
    render(
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );
    expect(screen.getByLabelText("Search for a place...")).toBeInTheDocument();
  });

  it("should render a search button", () => {
    render(
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("shows loading state across weather info and detail cards after search", async () => {
    render(
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );

    const cardLabels = [
      /feels like card/i,
      /humidity card/i,
      /wind card/i,
      /precipitation card/i,
    ];

    const searchField = screen.getByLabelText("Search for a place...");
    const searchButton = screen.getByRole("button", { name: /search/i });

    await userEvent.type(searchField, "Los Angeles, California");
    await userEvent.click(searchButton);

    // WeatherInfoCard loading state
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // WeatherDetailCards loading state
    cardLabels.forEach((label) => {
      const card = screen.getByLabelText(label);
      expect(within(card).getByText("-")).toBeInTheDocument();
    });
  });
});
