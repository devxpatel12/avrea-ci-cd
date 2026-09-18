import { Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import type { RunnerInfo as RunnerInfoType } from "@/lib/types";

interface RunnerInfoProps {
  runner: RunnerInfoType;
}

export function RunnerInfo({ runner }: RunnerInfoProps) {
  const details = [
    { label: "OS", value: runner.os },
    { label: "Architecture", value: runner.architecture },
    { label: "Node.js", value: runner.nodeVersion },
    { label: "Package manager", value: runner.packageManager },
  ];

  return (
    <Card data-testid="runner-info">
      <CardHeader
        title="Current runner information"
        description={runner.label}
        action={
          <Badge tone="neutral">
            <span className="inline-flex items-center gap-1">
              <Server className="h-3 w-3" aria-hidden="true" />
              demo
            </span>
          </Badge>
        }
      />
      <dl className="grid gap-3 sm:grid-cols-2">
        {details.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2"
          >
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{runner.notes}</p>
    </Card>
  );
}
