import type { CollectionEntry } from 'astro:content';

type Props = {
  study: CollectionEntry<'case-studies'>;
};

export default function CaseStudyCard({ study }: Props) {
  const { data } = study;

  return (
    <a 
      href={`/portfolio/${study.slug}`} 
      className="group relative flex flex-col bg-card hover:bg-accent/5 transition-all duration-200 p-6 rounded-xl border border-border/50 hover:border-border hover:shadow-lg"
    >
      {/* Project Type Badge */}
      <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
        {data.projectType}
      </span>

      {/* Content */}
      <div className="flex-1">
        <h4 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
          {data.title}
        </h4>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          {data.client}
        </p>
        <p className="text-sm text-muted-foreground/90 line-clamp-3 mb-4">
          {data.summary}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
        {data.tags?.map((tag: string) => (
          <span className="px-2 py-1 bg-accent/50 text-accent-foreground/90 rounded-md text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow Icon */}
      <svg
        className="absolute bottom-6 right-6 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}
