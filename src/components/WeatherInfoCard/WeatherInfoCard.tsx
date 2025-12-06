import Image from "next/image";
import WeatherInfoBgLg from "../../../public/bg-today-large.svg";

import SunSVG from "../../../public/weather-icons/Clear-sunny.svg";

export default function WeatherInfoCard() {
  return (
    <div className="relative col-span-4 radius-20 overflow-hidden">
      <Image
        src={WeatherInfoBgLg}
        alt="Dark, cloudy night background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 h-full flex items-center justify-between py-20 px-6">
        <div className="flex flex-col gap-3">
          <p className="text-preset-4">Berlin, Germany</p>
          <p className="text-preset-6 opacity-80">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex gap-5 items-center">
          <Image src={SunSVG} alt="Sun" width={120} height={120} />
          <p className="text-preset-1">20°</p>
        </div>
      </div>
    </div>
  );
}
