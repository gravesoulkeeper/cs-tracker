import { model } from "mongoose";

import { configSchema } from "./configSchema";
import { themeSchema } from "./themeSchema";
import { linkSchema } from "./linkSchema";

export const Config = model("Config", configSchema);
export const Link = model("Link", linkSchema);
export const Theme = model("Theme", themeSchema);
