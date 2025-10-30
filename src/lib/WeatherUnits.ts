const TEMPERATURE_UNITS = ["celsius", "fahrenheit"] as const;
export type TemperatureUnit = (typeof TEMPERATURE_UNITS)[number];

const WIND_SPEED_UNITS = ["km/h", "mph"] as const;
export type WindSpeedUnit = (typeof WIND_SPEED_UNITS)[number];

const PRECIPITATION_UNITS = ["millimeters", "inches"] as const;
export type PrecipitationUnit = (typeof PRECIPITATION_UNITS)[number];
