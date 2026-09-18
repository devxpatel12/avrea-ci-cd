import type { ReactNode } from "react";

interface AboutTopicProps {
  title: string;
  children: ReactNode;
}

export function AboutTopic({ title, children }: AboutTopicProps) {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
        {children}
      </div>
    </article>
  );
}
