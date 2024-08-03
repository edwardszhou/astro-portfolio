import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    date: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
