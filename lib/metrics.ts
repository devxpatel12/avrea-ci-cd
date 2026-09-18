import type {
  BuildMetric,
  CacheInfo,
  MetricCardData,
  PipelineStage,
  RunnerInfo,
} from "@/lib/types";

export const APP_NAME = "CI Performance Lab";

export const APP_DESCRIPTION =
  "A demo Next.js application designed to create a realistic GitHub Actions CI workload for runner benchmarking.";

export const pipelineStages: PipelineStage[] = [
  {
    id: "checkout",
    name: "Checkout",
    durationLabel: "8s",
    durationSeconds: 8,
    status: "success",
    description: "Clone the repository onto the runner workspace.",
  },
  {
    id: "install",
    name: "Install",
    durationLabel: "2m 10s",
    durationSeconds: 130,
    status: "success",
    description: "Install npm dependencies with a clean lockfile install.",
  },
  {
    id: "lint",
    name: "Lint",
    durationLabel: "45s",
    durationSeconds: 45,
    status: "success",
    description: "Run ESLint across the application source tree.",
  },
  {
    id: "build",
    name: "Build",
    durationLabel: "4m 20s",
    durationSeconds: 260,
    status: "success",
    description: "Compile the Next.js production bundle.",
  },
  {
    id: "test",
    name: "Test",
    durationLabel: "2m 30s",
    durationSeconds: 150,
    status: "success",
    description: "Execute the Vitest unit test suite.",
  },
];

export const metricCards: MetricCardData[] = [
  {
    id: "install-deps",
    title: "Install Dependencies",
    durationLabel: "2m 10s",
    durationSeconds: 130,
    description: "npm ci resolves and links packages from package-lock.json.",
    icon: "install",
  },
  {
    id: "lint",
    title: "Lint",
    durationLabel: "45s",
    durationSeconds: 45,
    description: "Static analysis catches style and correctness issues early.",
    icon: "lint",
  },
  {
    id: "build",
    title: "Build",
    durationLabel: "4m 20s",
    durationSeconds: 260,
    description: "TypeScript compilation and Next.js production optimization.",
    icon: "build",
  },
  {
    id: "tests",
    title: "Tests",
    durationLabel: "2m 30s",
    durationSeconds: 150,
    description: "Unit tests validate UI components and utility helpers.",
    icon: "test",
  },
];

export const runnerInfo: RunnerInfo = {
  label: "GitHub-hosted runner (demo values)",
  os: "Ubuntu Latest",
  architecture: "x64",
  nodeVersion: "24",
  packageManager: "npm",
  notes:
    "These values are static demo data for the dashboard. Real timings come from GitHub Actions step logs.",
};

export const cacheInfo: CacheInfo = {
  strategy: "actions/setup-node npm cache",
  scope: "package-lock.json",
  hitRateLabel: "Demo: warm cache",
  restoredPackages: "~180 MB (illustrative)",
  description:
    "The workflow uses cache: npm in setup-node so dependency restoration can be compared across runners.",
};

export const buildMetrics: BuildMetric[] = [
  {
    id: "total-duration",
    label: "Demo total duration",
    value: "9m 53s",
    hint: "Sum of the static stage durations shown on this page.",
  },
  {
    id: "cpu-heavy",
    label: "CPU-heavy stage",
    value: "Build",
    hint: "Production builds typically dominate runner CPU time.",
  },
  {
    id: "io-heavy",
    label: "I/O-heavy stage",
    value: "Install",
    hint: "Dependency installation is sensitive to disk and network.",
  },
  {
    id: "cache-impact",
    label: "Cache impact area",
    value: "npm ci",
    hint: "Warm caches usually reduce install time the most.",
  },
];
