/** Domain environmental inputs; field names mirror the backend response keys. */
export interface EnvironmentalInputs {
  tdb: number;
  tr: number;
  rh: number;
  v_z1: number;
  directNormalIrradianceWm2: number;
}

export type EnvironmentalMetricField = keyof EnvironmentalInputs;

export type EnvironmentalMetricIcon =
  | "temperature"
  | "droplet"
  | "wind"
  | "sun";

export type EnvironmentalUnitKey =
  | "celsius"
  | "percent"
  | "metersPerSecond"
  | "wattsPerSquareMeter";

export interface EnvironmentalMetricDefinition {
  field: EnvironmentalMetricField;
  icon: EnvironmentalMetricIcon;
  labelKey: `environmental.${EnvironmentalMetricField}`;
  unitKey: EnvironmentalUnitKey;
  decimals: number;
}

/** Metric order: familiar weather trio first, then radiation inputs. */
export const ENVIRONMENTAL_METRICS: readonly EnvironmentalMetricDefinition[] = [
  {
    field: "tdb",
    icon: "temperature",
    labelKey: "environmental.tdb",
    unitKey: "celsius",
    decimals: 1,
  },
  {
    field: "rh",
    icon: "droplet",
    labelKey: "environmental.rh",
    unitKey: "percent",
    decimals: 0,
  },
  {
    field: "v_z1",
    icon: "wind",
    labelKey: "environmental.v_z1",
    unitKey: "metersPerSecond",
    decimals: 1,
  },
  {
    field: "tr",
    icon: "temperature",
    labelKey: "environmental.tr",
    unitKey: "celsius",
    decimals: 1,
  },
  {
    field: "directNormalIrradianceWm2",
    icon: "sun",
    labelKey: "environmental.directNormalIrradianceWm2",
    unitKey: "wattsPerSquareMeter",
    decimals: 0,
  },
] as const;
