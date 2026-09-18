import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PipelineVisualization } from "@/components/dashboard/pipeline-visualization";
import { pipelineStages } from "@/lib/metrics";

describe("PipelineVisualization", () => {
  it("renders the ordered pipeline stages", () => {
    render(
      <PipelineVisualization stages={pipelineStages} totalLabel="9m 53s" />,
    );

    expect(screen.getByTestId("pipeline-flow")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("Install")).toBeInTheDocument();
    expect(screen.getByText("Lint")).toBeInTheDocument();
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("9m 53s")).toBeInTheDocument();
  });
});
