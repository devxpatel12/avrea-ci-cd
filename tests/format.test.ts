import { describe, expect, it } from "vitest";
import {
  formatDuration,
  getPipelineFlowLabels,
  getStageSharePercent,
  sumStageDurations,
} from "@/lib/format";
import type { PipelineStage } from "@/lib/types";

const sampleStages: PipelineStage[] = [
  {
    id: "a",
    name: "Checkout",
    durationLabel: "8s",
    durationSeconds: 8,
    status: "success",
    description: "checkout",
  },
  {
    id: "b",
    name: "Install",
    durationLabel: "2m 10s",
    durationSeconds: 130,
    status: "success",
    description: "install",
  },
];

describe("formatDuration", () => {
  it("formats seconds under one minute", () => {
    expect(formatDuration(8)).toBe("8s");
  });

  it("formats minutes and seconds", () => {
    expect(formatDuration(130)).toBe("2m 10s");
  });

  it("formats whole minutes without trailing seconds", () => {
    expect(formatDuration(120)).toBe("2m");
  });

  it("formats hours", () => {
    expect(formatDuration(3660)).toBe("1h 1m");
  });

  it("handles invalid values safely", () => {
    expect(formatDuration(-5)).toBe("0s");
    expect(formatDuration(Number.NaN)).toBe("0s");
  });
});

describe("pipeline helpers", () => {
  it("sums stage durations", () => {
    expect(sumStageDurations(sampleStages)).toBe(138);
  });

  it("returns flow labels in order", () => {
    expect(getPipelineFlowLabels(sampleStages)).toEqual([
      "Checkout",
      "Install",
    ]);
  });

  it("calculates stage share percentages", () => {
    expect(getStageSharePercent(50, 200)).toBe(25);
    expect(getStageSharePercent(10, 0)).toBe(0);
  });
});
