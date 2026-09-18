import type { PipelineStage } from "@/lib/types";

/**
 * Formats a duration in seconds as a compact human-readable label.
 * Examples: 8 -> "8s", 130 -> "2m 10s", 3600 -> "1h 0m"
 */
export function formatDuration(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return "0s";
  }

  const seconds = Math.floor(totalSeconds);

  if (seconds < 60) {
    return `${seconds}s`;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (remainingSeconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${remainingSeconds}s`;
}

/**
 * Sums stage durations for a simple pipeline total.
 */
export function sumStageDurations(stages: PipelineStage[]): number {
  return stages.reduce((total, stage) => total + stage.durationSeconds, 0);
}

/**
 * Builds the display order for the pipeline visualization.
 */
export function getPipelineFlowLabels(stages: PipelineStage[]): string[] {
  return stages.map((stage) => stage.name);
}

/**
 * Returns a percentage share of one stage relative to the full pipeline.
 */
export function getStageSharePercent(
  stageSeconds: number,
  totalSeconds: number,
): number {
  if (totalSeconds <= 0) {
    return 0;
  }

  return Math.round((stageSeconds / totalSeconds) * 100);
}
