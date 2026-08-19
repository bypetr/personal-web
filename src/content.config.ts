import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Emoji shown in the tile. */
    icon: z.string(),
    /** Free text, e.g. "Web app", "Extension". */
    category: z.string(),
    status: z.enum(['live', 'building']).optional(),
    url: z.url().optional(),
    /** Lower numbers first. */
    order: z.number().default(0),
  }),
});

export const collections = { projects };
