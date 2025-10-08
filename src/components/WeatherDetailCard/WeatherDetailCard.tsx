export default function WeatherDetailCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-neutral-800 radius-12 border border-neutral-600 flex flex-col justify-between">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
}
