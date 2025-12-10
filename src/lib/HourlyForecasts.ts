import CloudySVG from "@public/weather-icons/Partly Cloudy.svg";

export const hourlyForecasts = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  weatherSVG: CloudySVG,
  time: "3 PM",
  temperature: "20°",
}));
