import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MetricCard } from "@/components/dashboard/metric-card";
import type { MetricCardData } from "@/lib/types";

const metric: MetricCardData = {
  id: "build",
  title: "Build",
  durationLabel: "4m 20s",
  durationSeconds: 260,
  description: "Compile the Next.js production bundle.",
  icon: "build",
};

describe("MetricCard", () => {
  it("renders the title and duration", () => {
    render(<MetricCard metric={metric} />);

    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByTestId("metric-duration-build")).toHaveTextContent(
      "4m 20s",
    );
    expect(
      screen.getByText("Compile the Next.js production bundle."),
    ).toBeInTheDocument();
  });
});
