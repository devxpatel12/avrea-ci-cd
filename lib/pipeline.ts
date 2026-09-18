import { pipelineStages } from "@/lib/metrics";
import {
  formatDuration,
  getPipelineFlowLabels,
  getStageSharePercent,
  sumStageDurations,
} from "@/lib/format";

export function getPipelineSummary() {
  const totalSeconds = sumStageDurations(pipelineStages);

  return {
    flow: getPipelineFlowLabels(pipelineStages),
    totalLabel: formatDuration(totalSeconds),
    totalSeconds,
    stages: pipelineStages.map((stage) => ({
      ...stage,
      sharePercent: getStageSharePercent(stage.durationSeconds, totalSeconds),
    })),
  };
}
