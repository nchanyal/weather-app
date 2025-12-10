import Image from "next/image";

export default function HourlyForecastCard({
  weather,
  weatherSVG,
  time,
  temperature,
}: {
  weather: string;
  weatherSVG: any;
  time: string;
  temperature: string;
}) {
  return (
    <div className="bg-neutral-700 min-h-[3.75rem] radius-8 border border-neutral-600 py-2.5 pl-3 pr-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={weatherSVG} alt={weather} width={40} height={40} />
        <p className="text-preset-5-medium">{time}</p>
      </div>
      <div>
        <p className="text-preset-7">{temperature}</p>
      </div>
    </div>
  );
}
