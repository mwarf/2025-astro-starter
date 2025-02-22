import type { CollectionEntry } from 'astro:content';
import { formatDate } from '../lib/utils';

type Props = {
  insight: CollectionEntry<'insights'>;
  isPrimary?: boolean;
};

export default function InsightCard({ insight, isPrimary = false }: Props) {
  const { data } = insight;
  
  return (
    <article className={`
      group relative flex flex-col space-y-3 
      transition-all duration-200 hover:scale-[1.02]
      ${isPrimary ? 'p-1' : ''}
    `}>
      {data.featuredImage && (
        <img
          src={data.featuredImage}
          alt={data.title}
          className={`
            rounded-lg object-cover transition-all aspect-video 
            ${isPrimary ? 'shadow-lg' : ''}
          `}
          loading="lazy"
        />
      )}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {data.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {formatDate(data.publishDate)}
          </span>
        </div>
        <h2 className={`
          font-bold tracking-tight
          ${isPrimary ? 'text-3xl' : 'text-2xl'}
        `}>
          {data.title}
        </h2>
        <p className={`
          text-muted-foreground
          ${isPrimary ? 'text-lg' : 'text-base line-clamp-2'}
        `}>
          {data.description}
        </p>
      </div>
      <a 
        href={`/insights/${insight.slug}`} 
        className="absolute inset-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
      >
        <span className="sr-only">View Article</span>
      </a>
    </article>
  );
}
