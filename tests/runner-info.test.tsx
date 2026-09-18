import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RunnerInfo } from "@/components/dashboard/runner-info";
import { runnerInfo } from "@/lib/metrics";

describe("RunnerInfo", () => {
  it("shows runner details used on the dashboard", () => {
    render(<RunnerInfo runner={runnerInfo} />);

    expect(screen.getByTestId("runner-info")).toBeInTheDocument();
    expect(screen.getByText("Ubuntu Latest")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("npm")).toBeInTheDocument();
  });
});
