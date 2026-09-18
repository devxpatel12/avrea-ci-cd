import { BuildMetrics } from "@/components/dashboard/build-metrics";
import { CacheInfo } from "@/components/dashboard/cache-info";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { PipelineVisualization } from "@/components/dashboard/pipeline-visualization";
import { RunnerInfo } from "@/components/dashboard/runner-info";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  APP_DESCRIPTION,
  APP_NAME,
  buildMetrics,
  cacheInfo,
  metricCards,
  runnerInfo,
} from "@/lib/metrics";
import { getPipelineSummary } from "@/lib/pipeline";

export default function DashboardPage() {
  const pipeline = getPipelineSummary();

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
          Benchmark demo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {APP_NAME}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {APP_DESCRIPTION}
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Durations below are statics demo values so the UI stays stable. Use
          GitHub Actions step timings for real runner comparisons.
        </p>
      </section>

      <section>
        <SectionHeading
          eyebrow="Workload"
          title="Pipeline stages"
          description="A realistic CI path with enough TypeScript, linting, tests, and a production build to exercise a runner."
        />
        <div className="space-y-4">
          <PipelineVisualization
            stages={pipeline.stages}
            totalLabel={pipeline.totalLabel}
          />
          <MetricGrid metrics={metricCards} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <RunnerInfo runner={runnerInfo} />
        <CacheInfo cache={cacheInfo} />
      </section>

      <section>
        <SectionHeading
          title="Build metric"
          description="High-level signals that help explain where CI time usually goes."
        />
        <BuildMetrics metrics={buildMetrics} />
      </section>
    </div>
  );
}
