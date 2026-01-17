import type { Express } from "express";

export type ConfigFile = {
	favicon?: Express.Multer.File[];
	hero_image?: Express.Multer.File[];
	signin_image?: Express.Multer.File[];
	signup_image?: Express.Multer.File[];
};
