import { MetricCard } from "@/components/dashboard/metric-card";
import type { MetricCardData } from "@/lib/types";

interface MetricGridProps {
  metrics: MetricCardData[];
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      data-testid="metric-grid"
    >
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
}
