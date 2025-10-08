import HourlyForecastCard from "../HourlyForecastCard/HourlyForecastCard";

export default function HourlyForecast() {
  return (
    <div className="flex-grow">
      <div>
        <p>Hourly Forecast</p>
        <div>Days dropdown</div>
      </div>
      <HourlyForecastCard />
    </div>
  );
}
