"use client";

import { useWeather } from "@/hooks/useWeather";

export default function WeatherDetailCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  const context = useWeather();
  const { loading } = context;

  return (
    <div
      className="bg-neutral-800 radius-12 border border-neutral-600 p-5"
      aria-label={`${title.toLowerCase()} card`}
    >
      <div className="h-full flex flex-col justify-between">
        <p className="text-preset-6 text-neutral-200">{title}</p>
        <p className="text-preset-3">{loading ? "-" : value}</p>
      </div>
    </div>
  );
}
