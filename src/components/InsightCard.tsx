import type { CollectionEntry } from 'astro:content';
import { formatDate } from '../lib/utils';

type Props = {
  insight: CollectionEntry<'insights'>;
};

export default function InsightCard({ insight }: Props) {
  const { data } = insight;
  
  return (
    <article className="group relative flex flex-col space-y-2">
      {data.featuredImage && (
        <img
          src={data.featuredImage}
          alt={data.title}
          className="rounded-lg object-cover transition-all aspect-video"
          loading="lazy"
        />
      )}
      <div className="flex flex-col space-y-1">
        <p className="text-sm text-muted-foreground">
          {formatDate(data.publishDate)} · {data.category}
        </p>
        <h2 className="text-2xl font-bold tracking-tight">{data.title}</h2>
        <p className="text-muted-foreground">{data.description}</p>
      </div>
      <a href={`/insights/${insight.slug}`} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </a>
    </article>
  );
}
