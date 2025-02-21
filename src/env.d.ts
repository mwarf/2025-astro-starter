/// <reference types="astro/client" />
declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module 'astro:content' {
  export { z } from 'astro/zod';

  type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

  export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

  export type ContentCollectionKey = keyof AnyEntryMap;

  export type AllEntry = CollectionEntry<ContentCollectionKey>;

  type BaseSchema = import('astro/zod').AnyZodObject;

  export type SchemaContext = { image: { width: number; height: number } };

  type DataCollectionConfig<S extends BaseSchema> = {
    type: 'data';
    schema?: S;
  };

  type ContentCollectionConfig<S extends BaseSchema> = {
    type?: 'content';
    schema?: S;
  };

  type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

  export type AnyEntryMap = {
    'case-studies': {
      id: string;
      slug: string;
      body: string;
      collection: 'case-studies';
      data: {
        title: string;
        industry: string;
        projectType: string;
        date: Date;
        client: string;
        summary: string;
        featured: boolean;
        tags?: string[];
      };
    };
    'insights': {
      id: string;
      slug: string;
      body: string;
      collection: 'insights';
      data: {
        title: string;
        publishDate: Date;
        authors: string[];
        category: 'tech' | 'leadership' | 'design' | 'development' | 'strategy';
        featuredImage?: string;
        description: string;
        featured: boolean;
        draft: boolean;
        tags?: string[];
      };
    };
    'authors': {
      id: string;
      slug: string;
      body: string;
      collection: 'authors';
      data: {
        name: string;
        role: string;
        bio: string;
        avatar?: string;
        social?: {
          twitter?: string;
          linkedin?: string;
          github?: string;
        };
      };
    };
  };
}
