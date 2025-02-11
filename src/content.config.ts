import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, 'Short descriptions have better SEO!'),
    publishedDate: z.date(),
    updatedDate: z.date(),
    // image: z.string(),
    isDraft: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
