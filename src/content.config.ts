import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
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
