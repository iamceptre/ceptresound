import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    tag: z.string(),
    thumbnail: z.string(),
    title: z.string(),
    description: z.string().nullish(),
    heroImage: z.string().nullish(),
    heroImageWidth: z.number().optional(),
    heroImageHeight: z.number().optional(),
    video: z.string().nullish(),
    videoWidth: z.number().optional(),
    videoHeight: z.number().optional(),
    footerVideo: z.string().nullish(),
    category: z.string(),
    date: z.string(),
    createdAt: z.string(),
  }),
});

export const collections = { projects };
