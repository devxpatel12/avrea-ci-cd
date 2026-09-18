import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import type { PipelineStage } from "@/lib/types";

interface PipelineVisualizationProps {
  stages: PipelineStage[];
  totalLabel: string;
}

export function PipelineVisualization({
  stages,
  totalLabel,
}: PipelineVisualizationProps) {
  return (
    <Card>
      <CardHeader
        title="Pipeline visualization"
        description="Checkout → Install → Lint → Build → Test"
        action={<Badge tone="info">Demo flow</Badge>}
      />
      <div
        className="flex flex-wrap items-center gap-2"
        data-testid="pipeline-flow"
      >
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <p className="text-sm font-semibold text-slate-900">{stage.name}</p>
              <p className="font-mono text-xs text-slate-500">
                {stage.durationLabel}
              </p>
            </div>
            {index < stages.length - 1 ? (
              <ArrowRight
                className="h-4 w-4 shrink-0 text-slate-400"
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Demo pipeline total:{" "}
        <span className="font-mono font-semibold text-slate-900">
          {totalLabel}
        </span>
      </p>
    </Card>
  );
}
