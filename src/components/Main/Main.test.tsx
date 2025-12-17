import { render, screen } from "@testing-library/react";
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
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("shows the loading state on the WeatherInfoCard after a location is entered and the 'Search' button is clicked", async () => {
    render(
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );

    const searchField = screen.getByLabelText("Search for a place...");
    const searchButton = screen.getByRole("button", { name: /search/i });

    await userEvent.type(searchField, "Los Angeles, California");
    await userEvent.click(searchButton);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
