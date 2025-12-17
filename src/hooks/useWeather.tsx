import { WeatherContext } from "@/Context/WeatherContext";
import { useContext } from "react";

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within WeatherProvider");
  }
  return context;
}
