import { defineCollection, z } from 'astro:content';

// Define valid categories for insights
const INSIGHT_CATEGORIES = ['tech', 'leadership', 'design', 'development', 'strategy'] as const;

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    projectType: z.string(),
    date: z.date(),
    client: z.string(),
    summary: z.string(),
    featuredImage: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    category: z.enum(INSIGHT_CATEGORIES),
    featuredImage: z.string().optional(),
    description: z.string().max(160),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    social: z.object({
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
    }).optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'insights': insights,
  'authors': authors,
};
