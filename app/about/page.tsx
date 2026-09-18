import { AboutTopic } from "@/components/about/about-topic";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl">
        <SectionHeading
          eyebrow="Concepts"
          title="About CI"
          description="Short definitions to help explain GitHub Actions runner benchmarks in the video."
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <AboutTopic title="What is CI?">
          <p>
            Continuous Integration (CI) automatically checks every change by
            installing dependencies, running linting, tests, and builds. The
            goal is to catch failures early before they reach production.
          </p>
        </AboutTopic>

        <AboutTopic title="What is GitHub Actions?">
          <p>
            GitHub Actions is a CI/CD system built into GitHub. Workflows defined
            in YAML run jobs made of steps whenever events like pushes or pull
            requests occur.
          </p>
        </AboutTopic>

        <AboutTopic title="What is a runner?">
          <p>
            A runner is the machine that executes workflow jobs. GitHub provides
            hosted runners, and you can also use self-hosted or alternative
            runners by changing the <code>runs-on</code> value.
          </p>
        </AboutTopic>

        <AboutTopic title="Why dependency installation can take time">
          <p>
            <code>npm ci</code> downloads packages, verifies the lockfile, and
            writes many files to disk. Cold caches, large trees, and slower
            network or storage make this stage longer.
          </p>
        </AboutTopic>

        <AboutTopic title="Why builds can be CPU intensive">
          <p>
            Production builds compile TypeScript, bundle JavaScript, optimize
            assets, and generate routes. These steps are often limited by CPU
            cores and single-thread performance.
          </p>
        </AboutTopic>

        <AboutTopic title="Why caching matters">
          <p>
            Caching reused artifacts such as the npm package cache avoids
            repeated downloads. Warm caches usually shrink install time and make
            runner comparisons more interesting.
          </p>
        </AboutTopic>
      </div>
    </div>
  );
}
