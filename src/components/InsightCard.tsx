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
      transition-all duration-200 hover:shadow-md hover:scale-[1.03]
      ${isPrimary ? 'p-3 border border-primary/20 rounded-lg shadow-lg hover:shadow-xl' : ''}
    `}>
      {data.featuredImage && (
        <img
          src={data.featuredImage}
          alt={data.title}
          className={`
            rounded-lg object-cover transition-all aspect-video 
            ${isPrimary ? 'shadow-xl' : ''}
          `}
          loading="lazy"
        />
      )}
      <div className="flex flex-col space-y-2 px-1">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
            {data.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {formatDate(data.publishDate)}
          </span>
        </div>
        <h2 className={`
          font-bold tracking-tight
          ${isPrimary ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}
        `}>
          {data.title}
        </h2>
        <p className={`
          text-muted-foreground
          ${isPrimary ? 'text-lg md:text-xl' : 'text-base line-clamp-2'}
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
