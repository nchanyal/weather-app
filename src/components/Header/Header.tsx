"use client";

import Image from "next/image";
import { useState } from "react";

import logoUrl from "@public/logo.svg";
import unitIconUrl from "@public/normal-icons/icon-units.svg";
import dropdownIconUrl from "@public/normal-icons/icon-dropdown.svg";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DropdownMenuRadioSection } from "../DropdownMenuRadioSection";
import { rainOptions, tempOptions, windOptions } from "@/lib/WeatherOptions";
import {
  TemperatureUnit,
  WindSpeedUnit,
  PrecipitationUnit,
} from "@/lib/WeatherUnits";

export default function Header() {
  const [temperature, setTemperature] = useState<TemperatureUnit>("celsius");
  const [windSpeed, setWindSpeed] = useState<WindSpeedUnit>("km/h");
  const [precipitation, setPrecipitation] =
    useState<PrecipitationUnit>("millimeters");

  return (
    <header className="flex justify-between h-[2.6875rem] radius-8">
      <div>
        <Image src={logoUrl} alt="Weather Now" />
      </div>
      <div className="max-w-[119px] w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-neutral-800 hover:bg-neutral-700 w-full h-full">
              <Image src={unitIconUrl} alt="Unit Icon" />
              <p className="text-preset-7">Units</p>
              <Image src={dropdownIconUrl} alt="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="flex flex-col shadow-custom bg-neutral-800 border-neutral-600 w-[13.375rem] max-w-[13.375rem] h-[25.75rem] max-h-[25.75rem] py-1.5 px-2 radius-12"
          >
            <DropdownMenuItem className="text-preset-7-white radius-8 h-[2.4375rem] max-h-[2.4375rem] mb-1">
              Switch to Imperial
            </DropdownMenuItem>
            <DropdownMenuRadioSection
              label="Temperature"
              value={temperature}
              onValueChange={(value) =>
                setTemperature(value as TemperatureUnit)
              }
              options={tempOptions}
            />

            <DropdownMenuSeparator className="bg-neutral-600 mx-0 w-[12.25rem] max-w-[12.25rem]" />

            <DropdownMenuRadioSection
              label="Wind Speed"
              value={windSpeed}
              onValueChange={(value) => setWindSpeed(value as WindSpeedUnit)}
              options={windOptions}
            />

            <DropdownMenuSeparator className="bg-neutral-600 mx-0 w-[12.25rem] max-w-[12.25rem]" />

            <DropdownMenuRadioSection
              label="Precipitation"
              value={precipitation}
              onValueChange={(value) =>
                setPrecipitation(value as PrecipitationUnit)
              }
              options={rainOptions}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
