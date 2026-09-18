import { Card, CardHeader } from "@/components/ui/card";
import type { BuildMetric } from "@/lib/types";

interface BuildMetricsProps {
  metrics: BuildMetric[];
}

export function BuildMetrics({ metrics }: BuildMetricsProps) {
  return (
    <Card data-testid="build-metrics">
      <CardHeader
        title="Build metrics"
        description="Illustrative numbers used only for the dashboard demo."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50 to-white px-4 py-3"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {metric.label}
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-slate-900">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-slate-600">{metric.hint}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
