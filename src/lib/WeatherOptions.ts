export type UnitOption = {
  label: string;
  value: string;
};

export const tempOptions: UnitOption[] = [
  {
    label: "Celsius (°C)",
    value: "celsius",
  },
  {
    label: "Fahrenheit (°F)",
    value: "fahrenheit",
  },
];

export const windOptions: UnitOption[] = [
  {
    label: "km/h",
    value: "km/h",
  },
  {
    label: "mph",
    value: "mph",
  },
];

export const rainOptions: UnitOption[] = [
  {
    label: "Millimeters (mm)",
    value: "millimeters",
  },
  {
    label: "Inches (in)",
    value: "inches",
  },
];
