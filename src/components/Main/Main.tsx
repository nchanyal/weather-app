import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import SearchBar from "../SearchBar/SearchBar";
import WeatherDetailCard from "../WeatherDetailCard/WeatherDetailCard";
import WeatherInfoCard from "../WeatherInfoCard/WeatherInfoCard";

import { weatherDetails } from "@/lib/WeatherDetails";

export default function Main() {
  return (
    <main className="min-h-[797px] flex flex-col gap-12">
      <SearchBar />
      <div className="grid grid-cols-12 gap-8 flex-grow">
        <div className="col-span-8 grid gap-12 h-full grid-rows-[436fr_209fr]">
          <div className="grid gap-y-8 gap-x-6 h-full grid-rows-[286fr_118fr] grid-cols-[repeat(4,_182fr)]">
            <WeatherInfoCard />
            {weatherDetails.map((detail) => (
              <WeatherDetailCard key={detail.id} {...detail} />
            ))}
          </div>

          <div>
            <DailyForecast />
          </div>
        </div>
        <div className="col-span-4 flex bg-neutral-800 radius-20">
          <HourlyForecast />
        </div>
      </div>
    </main>
  );
}
