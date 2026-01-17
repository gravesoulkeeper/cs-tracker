type ThemeToken<T = string> = {
	value: T;
	description: string;
	link?: string;
};

type BgColor = {
	"--bg-primary": ThemeToken;
	"--bg-secondary": ThemeToken;
	"--bg-navbar": ThemeToken;
	"--bg-body": ThemeToken;
	"--bg-section": ThemeToken;
	"--bg-footer": ThemeToken;
	"--bg-input": ThemeToken;
	"--bg-alive": ThemeToken;
	"--bg-dead": ThemeToken;
	"--bg-btn-filter": ThemeToken;
	"--bg-btn-auth": ThemeToken;
	"--bg-btn-send": ThemeToken;
	"--bg-btn-action": ThemeToken;
};

type TextColor = {
	"--text-primary": ThemeToken;
	"--text-secondary": ThemeToken;
	"--text-navbar": ThemeToken;
	"--text-heading": ThemeToken;
	"--text-input": ThemeToken;
	"--text-light": ThemeToken;
	"--text-alive": ThemeToken;
	"--text-dead": ThemeToken;
	"--text-btn-filter": ThemeToken;
	"--text-btn-auth": ThemeToken;
	"--text-btn-send": ThemeToken;
	"--text-btn-action": ThemeToken;
};

type FontSize = {
	"--font-size-3xs": ThemeToken;
	"--font-size-2xs": ThemeToken;
	"--font-size-xs": ThemeToken;
	"--font-size-sm": ThemeToken;
	"--font-size-md": ThemeToken;
	"--font-size-lg": ThemeToken;
	"--font-size-xl": ThemeToken;
	"--font-size-2xl": ThemeToken;
	"--font-size-3xl": ThemeToken;
};

type FontWeight = {
	"--font-weight-thin": ThemeToken<number>;
	"--font-weight-extralight": ThemeToken<number>;
	"--font-weight-light": ThemeToken<number>;
	"--font-weight-normal": ThemeToken<number>;
	"--font-weight-medium": ThemeToken<number>;
	"--font-weight-semibold": ThemeToken<number>;
	"--font-weight-bold": ThemeToken<number>;
	"--font-weight-extrabold": ThemeToken<number>;
	"--font-weight-black": ThemeToken<number>;
};

type FontFamily = {
	"--font-family-primary": ThemeToken;
	"--font-family-secondary": ThemeToken;
	"--font-family-navbar": ThemeToken;
	"--font-family-heading": ThemeToken;
	"--font-family-input": ThemeToken;
	"--font-family-light": ThemeToken;
	"--font-family-button": ThemeToken;
	"--font-family-user": ThemeToken;
	"--font-family-number": ThemeToken;
};

type BorderRadius = {
	"--border-radius-primary": ThemeToken;
	"--border-radius-secondary": ThemeToken;
	"--border-radius-section": ThemeToken;
	"--border-radius-input": ThemeToken;
	"--border-radius-btn-filter": ThemeToken;
	"--border-radius-btn-auth": ThemeToken;
	"--border-radius-btn-send": ThemeToken;
	"--border-radius-btn-action": ThemeToken;
};

export type ThemeData = {
	bg_color: BgColor;
	text_color: TextColor;
	font_size: FontSize;
	font_weight: FontWeight;
	font_family: FontFamily;
	border_radius: BorderRadius;
};
