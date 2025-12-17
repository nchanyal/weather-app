"use client";

import { createContext } from "react";

export type WeatherData = {};

type WeatherContextType = {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);
