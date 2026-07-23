import type { AdditionalLocale } from "../config";
import type { GameTranslation } from "../game";
import { deGames } from "./de";
import { esGames } from "./es";
import { frGames } from "./fr";
import { koGames } from "./ko";
import { ptBrGames } from "./pt-br";
import { zhCnGames } from "./zh-cn";
import { zhTwGames } from "./zh-tw";

export const localizedGames: Record<
  AdditionalLocale,
  Record<string, GameTranslation>
> = {
  "zh-cn": zhCnGames,
  "zh-tw": zhTwGames,
  ko: koGames,
  es: esGames,
  fr: frGames,
  de: deGames,
  "pt-br": ptBrGames,
};
