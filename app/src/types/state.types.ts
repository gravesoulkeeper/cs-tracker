import type { ThemeData, UserData } from "@types";

export type InitialStateProps<T = unknown> = {
	success: boolean;
	status: number;
	data?: T | null;
	error?: string | null;
	loading: boolean;
};

export type ConfigData = {
	name: string;
	favicon: string;
	hero_image: string;
	signin_image?: string;
	signup_image?: string;
	links: object[];
	theme: ThemeData;
};

export type AuthData = {
	is_authenticated: boolean;
	access_token: string | null;
	user_data: UserData | null;
};

export type TokenData = {
	is_authenticated: boolean;
	access_token: string | null;
};
