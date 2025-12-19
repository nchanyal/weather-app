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

  it("shows loading state across components after search", async () => {
    render(
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );

    const weatherDetailLabels = [
      /feels like card/i,
      /humidity card/i,
      /wind card/i,
      /precipitation card/i,
    ];

    const dailyForecastLabels = [
      /tue forecast card/i,
      /wed forecast card/i,
      /thu forecast card/i,
      /fri forecast card/i,
      /sat forecast card/i,
      /sun forecast card/i,
      /mon forecast card/i,
    ];

    const daysDropdownButton = screen.getByLabelText("days dropdown button");

    const hourlyForecastLabels = Array.from(
      { length: 24 },
      (_, i) => `${i} pm forecast card`
    );

    const searchField = screen.getByLabelText("Search for a place...");
    const searchButton = screen.getByRole("button", { name: /search/i });

    await userEvent.type(searchField, "Los Angeles, California");
    await userEvent.click(searchButton);

    // WeatherInfoCard loading state
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // WeatherDetailCards loading state
    weatherDetailLabels.forEach((label) => {
      const card = screen.getByLabelText(label);
      expect(within(card).getByText("-")).toBeInTheDocument();
    });

    // DailyForecastCards loading state
    dailyForecastLabels.forEach((label) => {
      const card = screen.getByLabelText(label);
      expect(card).toBeEmptyDOMElement();
    });

    // Days dropdown button loading state
    expect(within(daysDropdownButton).getByText("-")).toBeInTheDocument();

    // HourlyForecastCards loading state
    hourlyForecastLabels.forEach((label) => {
      const card = screen.getByLabelText(label);
      expect(card).toBeEmptyDOMElement();
    });
  });
});
