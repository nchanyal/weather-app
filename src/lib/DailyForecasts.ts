import RainSVG from "@public/weather-icons/Rain.svg";
import DrizzleSVG from "@public/weather-icons/Drizzle.svg";
import SunnySVG from "@public/weather-icons/Clear-sunny.svg";
import CloudySVG from "@public/weather-icons/Partly Cloudy.svg";
import ThunderstormSVG from "@public/weather-icons/Thunderstorms.svg";
import SnowSVG from "@public/weather-icons/Snow.svg";
import FogSVG from "@public/weather-icons/Fog.svg";

export const dailyForecasts = [
  {
    id: 1,
    day: "Tue",
    weather: "Rain",
    weatherSVG: RainSVG,
    temperature: {
      high: "20°",
      low: "14°",
    },
  },
  {
    id: 2,
    day: "Wed",
    weather: "Drizzle",
    weatherSVG: DrizzleSVG,
    temperature: {
      high: "21°",
      low: "15°",
    },
  },
  {
    id: 3,
    day: "Thu",
    weather: "Sunny",
    weatherSVG: SunnySVG,
    temperature: {
      high: "24°",
      low: "14°",
    },
  },
  {
    id: 4,
    day: "Fri",
    weather: "Partly Cloudy",
    weatherSVG: CloudySVG,
    temperature: {
      high: "25°",
      low: "13°",
    },
  },
  {
    id: 5,
    day: "Sat",
    weather: "Thunderstorms",
    weatherSVG: ThunderstormSVG,
    temperature: {
      high: "21°",
      low: "15°",
    },
  },
  {
    id: 6,
    day: "Sun",
    weather: "Snow",
    weatherSVG: SnowSVG,
    temperature: {
      high: "25°",
      low: "16°",
    },
  },
  {
    id: 7,
    day: "Mon",
    weather: "Fog",
    weatherSVG: FogSVG,
    temperature: {
      high: "24°",
      low: "15°",
    },
  },
];
