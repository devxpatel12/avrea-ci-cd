import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { metricCards } from "@/lib/metrics";

describe("MetricGrid", () => {
  it("renders all metric cards", () => {
    render(<MetricGrid metrics={metricCards} />);

    expect(screen.getByTestId("metric-grid")).toBeInTheDocument();
    expect(screen.getByText("Install Dependencies")).toBeInTheDocument();
    expect(screen.getByText("Lint")).toBeInTheDocument();
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Tests")).toBeInTheDocument();
  });
});
