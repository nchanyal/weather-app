"use client";

import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";
import WeatherInfoBgLg from "@public/bg-today-large.svg";
import SunSVG from "@public/weather-icons/Clear-sunny.svg";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export default function WeatherInfoCard() {
  const context = useWeather();
  const { loading } = context;

  return (
    <div className="relative col-span-4 radius-20 overflow-hidden">
      {loading ? (
        <div className="h-full bg-neutral-800 flex flex-col justify-center items-center gap-3">
          <LoadingSpinner className="w-8 h-8 text-neutral-200 animate-[spin_1.3s_linear_infinite]" />
          <p className="text-preset-6 text-neutral-200">Loading...</p>
        </div>
      ) : (
        <>
          <Image
            src={WeatherInfoBgLg}
            alt=""
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
        </>
      )}
    </div>
  );
}
