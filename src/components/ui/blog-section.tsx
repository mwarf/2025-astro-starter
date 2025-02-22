import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CollectionEntry } from 'astro:content';

export interface InsightData {
  slug: string;
  data: {
    title: string;
    publishDate: Date;
    category: string;
    featuredImage?: string;
    description: string;
  };
}

type BlogInsight = CollectionEntry<'insights'> | InsightData;

interface BlogProps {
  insights: BlogInsight[];
}

const Blog = ({ insights }: BlogProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Latest articles
        </h4>
        <Button className="gap-4">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {insights.slice(0, 4).map((insight: BlogInsight) => (
          <a 
            key={insight.slug}
            href={`/insights/${insight.slug}`}
            className="flex flex-col gap-2 hover:opacity-90 transition-all duration-200 group"
          >
            <div className="relative rounded-lg overflow-hidden aspect-video mb-4">
              {insight.data.featuredImage && (
                <img
                  src={insight.data.featuredImage}
                  alt={insight.data.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                />
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl tracking-tight group-hover:text-primary transition-colors">
                {insight.data.title}
              </h3>
              <p className="text-muted-foreground text-base line-clamp-2">
                {insight.data.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <time dateTime={insight.data.publishDate.toISOString()}>
                  {new Date(insight.data.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {insight.data.category && (
                  <>
                    <span>•</span>
                    <span className="capitalize">{insight.data.category}</span>
                  </>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export { Blog };
