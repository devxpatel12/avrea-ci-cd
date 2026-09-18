import { describe, expect, it } from "vitest";
import { getPipelineSummary } from "@/lib/pipeline";

describe("getPipelineSummary", () => {
  it("builds a complete pipeline summary for the dashboard", () => {
    const summary = getPipelineSummary();

    expect(summary.flow).toEqual([
      "Checkout",
      "Install",
      "Lint",
      "Build",
      "Test",
    ]);
    expect(summary.totalSeconds).toBe(593);
    expect(summary.totalLabel).toBe("9m 53s");
    expect(summary.stages).toHaveLength(5);
    expect(summary.stages[0]?.sharePercent).toBeGreaterThan(0);
  });
});
