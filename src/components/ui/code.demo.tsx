import { Blog } from "@/components/ui/blog-section";
import type { CollectionEntry } from 'astro:content';

// Mock data for demonstration purposes
// Import the InsightData type
import type { InsightData } from "@/components/ui/blog-section";

const mockInsights: InsightData[] = [
  {
    slug: 'demo-post-1',
    data: {
      title: "The Future of Technology",
      publishDate: new Date('2025-02-21'),
      category: "tech",
      featuredImage: "/images/insights/digital-transformation.jpg",
      description: "Exploring emerging trends in technology and their impact on business."
    }
  },
  {
    slug: 'demo-post-2',
    data: {
      title: "AI in Business",
      publishDate: new Date('2025-02-20'),
      category: "tech",
      featuredImage: "/images/insights/digital-transformation.jpg",
      description: "How artificial intelligence is transforming modern business operations."
    }
  },
  {
    slug: 'demo-post-3',
    data: {
      title: "Digital Transformation",
      publishDate: new Date('2025-02-19'),
      category: "strategy",
      featuredImage: "/images/insights/digital-transformation.jpg",
      description: "A comprehensive guide to digital transformation in 2025."
    }
  },
  {
    slug: 'demo-post-4',
    data: {
      title: "Cloud Computing Trends",
      publishDate: new Date('2025-02-18'),
      category: "tech",
      featuredImage: "/images/insights/digital-transformation.jpg",
      description: "Latest trends and developments in cloud computing technology."
    }
  }
];

function BlogDemo() {
  return (
    <div className="w-full">
      <Blog insights={mockInsights} />
    </div>
  );
}

export { BlogDemo };
