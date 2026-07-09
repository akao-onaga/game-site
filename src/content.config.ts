import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    catch: z.string(), // 一言キャッチコピー
    category: z.enum(["ios", "unityroom"]),
    // unityroom 100本投稿企画の何本目か
    unityroomNo: z.number().optional(),
    genre: z.string(),
    platforms: z.array(z.string()),
    releaseDate: z.coerce.date(),
    // カードやページのアクセントカラー
    color: z.string().default("#ff6b9d"),
    // スクリーンショット(public/ からのパス)
    cover: z.string(),
    icon: z.string().optional(),
    screenshots: z.array(z.string()).default([]),
    // 配信ページなどへのリンク
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    // あかお×おナガの会話形式のゲーム紹介
    dialogue: z
      .array(
        z.object({
          speaker: z.enum(["akao", "onaga"]),
          text: z.string(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { games };
