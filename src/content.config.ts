import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const gameSchema = z.object({
  title: z.string(),
  catch: z.string(),
  category: z.enum(["ios", "unityroom"]),
  unityroomNo: z.number().optional(),
  genre: z.string(),
  platforms: z.array(z.string()),
  releaseDate: z.coerce.date(),
  color: z.string().default("#ff6b9d"),
  cover: z.string(),
  icon: z.string().optional(),
  screenshots: z.array(z.string()).default([]),
  links: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),
  dialogue: z
    .array(
      z.object({
        speaker: z.enum(["akao", "onaga"]),
        text: z.string(),
      }),
    )
    .default([]),
  featured: z.boolean().default(false),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: gameSchema,
});

const gamesEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games-en" }),
  schema: gameSchema,
});

export const collections = { games, gamesEn };
