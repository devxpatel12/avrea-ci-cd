export type PipelineStageStatus = "pending" | "running" | "success" | "failed";

export interface PipelineStage {
  id: string;
  name: string;
  durationLabel: string;
  durationSeconds: number;
  status: PipelineStageStatus;
  description: string;
}

export interface MetricCardData {
  id: string;
  title: string;
  durationLabel: string;
  durationSeconds: number;
  description: string;
  icon: "install" | "lint" | "build" | "test";
}

export interface RunnerInfo {
  label: string;
  os: string;
  architecture: string;
  nodeVersion: string;
  packageManager: string;
  notes: string;
}

export interface CacheInfo {
  strategy: string;
  scope: string;
  hitRateLabel: string;
  restoredPackages: string;
  description: string;
}

export interface BuildMetric {
  id: string;
  label: string;
  value: string;
  hint: string;
}
