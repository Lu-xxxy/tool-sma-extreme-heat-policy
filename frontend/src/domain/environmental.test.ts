import { describe, expect, it } from "vitest";
import { ENVIRONMENTAL_METRICS } from "@/domain/environmental";

describe("ENVIRONMENTAL_METRICS", () => {
  it("registers the five backend forecast input fields in camelCase", () => {
    expect(ENVIRONMENTAL_METRICS.map((metric) => metric.field)).toEqual([
      "tdb",
      "rh",
      "v_z1",
      "tr",
      "directNormalIrradianceWm2",
    ]);
  });
});
