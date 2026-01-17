export type RegisterRequest = {
	display_name: string;
	username: string;
	email: string;
	password: string;
	recaptcha_key: string;
};

type PrivacyData = {
	show_location: boolean;
	show_email: boolean;
	show_activity: boolean;
};

type RoleData = {
	name: string | null;
	icon: string | null;
	style: string | null;
	priority: number | null;
};

export type UserData = {
	tag: "anonymous" | "staff" | "member";
	display_name: string | null;
	username: string | null;
	email: string | null;
	avatar: string | null;
	cover: string | null;
	bio: string | null;
	privacy: PrivacyData;
	role: RoleData | null;
	created_at: Date | null;
};
