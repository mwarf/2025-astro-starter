import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    projectType: z.string(),
    date: z.date(),
    client: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
