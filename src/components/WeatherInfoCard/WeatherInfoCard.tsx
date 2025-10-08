export default function WeatherInfoCard() {
  return (
    <div className="col-span-4 bg-linear-to-br from-blue-500 to-blue-700 radius-20 flex items-center justify-between">
      <div>
        <div>Location</div>
        <div>Date</div>
      </div>
      <div>
        <div>Weather Icon</div>
        <div>Temperature</div>
      </div>
    </div>
  );
}
