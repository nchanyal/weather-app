"use client";

import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

export function WeatherProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchWeather(city: string) {
    setLoading(true);
    setError(null);
  }

  return (
    <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
