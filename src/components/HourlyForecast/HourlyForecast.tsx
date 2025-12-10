"use client";

import dropdownIconUrl from "@public/normal-icons/icon-dropdown.svg";

import HourlyForecastCard from "../HourlyForecastCard/HourlyForecastCard";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { useState } from "react";
import { hourlyForecasts } from "@/lib/HourlyForecasts";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function HourlyForecast() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="flex-grow p-6 grid grid-rows-[37px_592px] gap-4">
      <div className="flex justify-between items-center">
        <p className="text-preset-5">Hourly forecast</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-neutral-600 hover:bg-neutral-600 w-[7.5rem] h-[2.3125rem] px-4 py-2">
              <p className="text-neutral-0 font-dm-sans font-medium text-base">
                {selectedDay}
              </p>
              <Image src={dropdownIconUrl} alt="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="flex flex-col shadow-custom bg-neutral-800 border-neutral-600 w-[13.375rem] max-w-[13.375rem] py-1.5 px-2 radius-12"
          >
            {days.map((day, index) => (
              <DropdownMenuItem
                key={day}
                onSelect={() => setSelectedDay(day)}
                className={`text-preset-7-white h-[2.4375rem] max-h-[2.4375rem] radius-8 ${
                  index !== days.length - 1 && "mb-1"
                }`}
              >
                {day}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-x-auto flex flex-col gap-4">
        {hourlyForecasts.map((forecast) => (
          <HourlyForecastCard key={forecast.id} {...forecast} />
        ))}
      </div>
    </div>
  );
}
