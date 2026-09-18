import {
  CheckCircle2,
  Hammer,
  Package,
  ScanSearch,
  TestTube2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { MetricCardData } from "@/lib/types";

const iconMap: Record<MetricCardData["icon"], LucideIcon> = {
  install: Package,
  lint: ScanSearch,
  build: Hammer,
  test: TestTube2,
};

interface MetricCardProps {
  metric: MetricCardData;
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = iconMap[metric.icon];

  return (
    <Card className="h-full transition-transform duration-200 hover:-translate-y-0.5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <Badge tone="success">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            demo
          </span>
        </Badge>
      </div>
      <h3 className="text-base font-semibold text-slate-900">{metric.title}</h3>
      <p
        className="mt-2 font-mono text-3xl font-semibold tracking-tight text-slate-900"
        data-testid={`metric-duration-${metric.id}`}
      >
        {metric.durationLabel}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {metric.description}
      </p>
    </Card>
  );
}
