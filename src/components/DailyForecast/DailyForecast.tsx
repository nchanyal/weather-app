import DailyForecastCard from "../DailyForecastCard/DailyForecastCard";
import { dailyForecasts } from "@/lib/DailyForecasts";

export default function DailyForecast() {
  return (
    <div className="h-full flex flex-col gap-5">
      <p className="text-preset-5 text-neutral-0">Daily Forecast</p>
      <div className="flex-grow grid grid-cols-[repeat(7,_100fr)] gap-4">
        {dailyForecasts.map((forecast) => (
          <DailyForecastCard key={forecast.id} {...forecast} />
        ))}
      </div>
    </div>
  );
}
