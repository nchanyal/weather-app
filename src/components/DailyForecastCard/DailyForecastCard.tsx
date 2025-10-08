export default function DailyForecastCard({
  day,
  weather,
  temperature,
}: {
  day: string;
  weather: string;
  temperature: { high: string; low: string };
}) {
  return (
    <div className="bg-neutral-800 radius-12 border border-neutral-600">
      <div>{day}</div>
      <div>{weather}</div>
      <div>
        <div>{temperature.high}</div>
        <div>{temperature.low}</div>
      </div>
    </div>
  );
}
