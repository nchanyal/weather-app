import Image from "next/image";

export default function DailyForecastCard({
  day,
  weather,
  weatherSVG,
  temperature,
}: {
  day: string;
  weather: string;
  weatherSVG: string;
  temperature: { high: string; low: string };
}) {
  return (
    <div className="bg-neutral-800 radius-12 border border-neutral-600 py-4 px-2.5">
      <div className="h-full flex flex-col items-center justify-between">
        <p className="text-preset-6">{day}</p>
        <Image src={weatherSVG} alt={weather} width={60} height={60} />
        <div className="flex justify-between text-preset-7 w-full">
          <p>{temperature.high}</p>
          <p className="text-neutral-200">{temperature.low}</p>
        </div>
      </div>
    </div>
  );
}
