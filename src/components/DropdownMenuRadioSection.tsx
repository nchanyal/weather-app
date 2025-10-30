import { UnitOption } from "@/lib/WeatherOptions";
import { DropdownMenuRadioItemRight } from "./DropdownMenuRadioItemRight";
import { DropdownMenuLabel, DropdownMenuRadioGroup } from "./ui/dropdown-menu";

interface DropdownMenuRadioSectionProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: UnitOption[];
}

export function DropdownMenuRadioSection({
  label,
  value,
  onValueChange,
  options,
}: DropdownMenuRadioSectionProps) {
  return (
    <div className="flex-1 flex flex-col">
      <DropdownMenuLabel className="text-preset-8-neutral-300">
        {label}
      </DropdownMenuLabel>
      <DropdownMenuRadioGroup
        value={value}
        onValueChange={onValueChange}
        className="flex-1 flex flex-col gap-1"
      >
        {options.map((option) => (
          <DropdownMenuRadioItemRight
            key={option.value}
            value={option.value}
            className={`text-preset-7-white flex-1 radius-8 ${
              value === option.value && "bg-neutral-700"
            }`}
          >
            {option.label}
          </DropdownMenuRadioItemRight>
        ))}
      </DropdownMenuRadioGroup>
    </div>
  );
}
