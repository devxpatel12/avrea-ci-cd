import { Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import type { CacheInfo as CacheInfoType } from "@/lib/types";

interface CacheInfoProps {
  cache: CacheInfoType;
}

export function CacheInfo({ cache }: CacheInfoProps) {
  return (
    <Card data-testid="cache-info">
      <CardHeader
        title="Dependency / cache information"
        description={cache.description}
        action={
          <Badge tone="warning">
            <span className="inline-flex items-center gap-1">
              <Database className="h-3 w-3" aria-hidden="true" />
              npm cache
            </span>
          </Badge>
        }
      />
      <dl className="space-y-3">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <dt className="text-sm text-slate-600">Strategy</dt>
          <dd className="text-sm font-medium text-slate-900">{cache.strategy}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <dt className="text-sm text-slate-600">Cache key scope</dt>
          <dd className="text-sm font-medium text-slate-900">{cache.scope}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <dt className="text-sm text-slate-600">Hit rate</dt>
          <dd className="text-sm font-medium text-slate-900">
            {cache.hitRateLabel}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-sm text-slate-600">Restored packages</dt>
          <dd className="text-sm font-medium text-slate-900">
            {cache.restoredPackages}
          </dd>
        </div>
      </dl>
    </Card>
  );
}
