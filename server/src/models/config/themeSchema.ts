import { Schema } from "mongoose";

const bg_color = new Schema(
	{
		"--bg-primary": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Main primary background color used across the app",
			},
		},
		"--bg-secondary": {
			value: {
				type: String,
				default: "#e5e7eb",
			},
			description: {
				type: String,
				default: "Secondary background color for sections and cards",
			},
		},
		"--bg-navbar": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Background color for the navigation bar",
			},
		},
		"--bg-body": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Default background color for the body content",
			},
		},
		"--bg-section": {
			value: {
				type: String,
				default: "#000000",
			},
			description: {
				type: String,
				default: "Background color for individual sections or containers",
			},
		},
		"--bg-footer": {
			value: {
				type: String,
				default: "#1f2020",
			},
			description: {
				type: String,
				default: "Background color for the footer area",
			},
		},
		"--bg-input": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Background color for input fields and text areas",
			},
		},
		"--bg-alive": {
			value: {
				type: String,
				default: "#5ce05c",
			},
			description: {
				type: String,
				default: "Green indicator for active or alive status",
			},
		},
		"--bg-dead": {
			value: {
				type: String,
				default: "#ff7777",
			},
			description: {
				type: String,
				default: "Red indicator for inactive or dead status",
			},
		},
		"--bg-btn-filter": {
			value: {
				type: String,
				default: "#292D32",
			},
			description: {
				type: String,
				default: "Background color for filter buttons",
			},
		},
		"--bg-btn-auth": {
			value: {
				type: String,
				default: "#292D32",
			},
			description: {
				type: String,
				default: "Background color for authentication buttons like login/register",
			},
		},
		"--bg-btn-send": {
			value: {
				type: String,
				default: "#292D32",
			},
			description: {
				type: String,
				default: "Background color for send or submit buttons",
			},
		},
		"--bg-btn-action": {
			value: {
				type: String,
				default: "#292D32",
			},
			description: {
				type: String,
				default: "Background color for action buttons in forms or modals",
			},
		},
	},
	{ _id: false },
);

const text_color = new Schema(
	{
		"--text-primary": {
			value: {
				type: String,
				default: "#000000",
			},
			description: {
				type: String,
				default: "Default primary text color used across the app",
			},
		},
		"--text-secondary": {
			value: {
				type: String,
				default: "#808080",
			},
			description: {
				type: String,
				default: "Secondary text color for less prominent text",
			},
		},
		"--text-navbar": {
			value: {
				type: String,
				default: "#292d32",
			},
			description: {
				type: String,
				default: "Text color used in the navigation bar",
			},
		},
		"--text-heading": {
			value: {
				type: String,
				default: "#000000",
			},
			description: {
				type: String,
				default: "Text color for headings and titles",
			},
		},
		"--text-input": {
			value: {
				type: String,
				default: "#000000",
			},
			description: {
				type: String,
				default: "Text color for input fields and form elements",
			},
		},
		"--text-light": {
			value: {
				type: String,
				default: "#808080",
			},
			description: {
				type: String,
				default: "Color for small hint text, like form labels",
			},
		},
		"--text-alive": {
			value: {
				type: String,
				default: "#5ce05c",
			},
			description: {
				type: String,
				default: "Green text color indicating active or alive status",
			},
		},
		"--text-dead": {
			value: {
				type: String,
				default: "#ff7777",
			},
			description: {
				type: String,
				default: "Red text color indicating inactive or dead status",
			},
		},
		"--text-btn-filter": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Text color for filter buttons",
			},
		},
		"--text-btn-auth": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Text color for authentication buttons (login/register)",
			},
		},
		"--text-btn-send": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Text color for send/submit buttons",
			},
		},
		"--text-btn-action": {
			value: {
				type: String,
				default: "#ffffff",
			},
			description: {
				type: String,
				default: "Text color for action buttons in forms or modals",
			},
		},
	},
	{ _id: false },
);

const font_size = new Schema(
	{
		"--font-size-3xs": {
			value: {
				type: String,
				default: "8px",
			},
			description: {
				type: String,
				default: "3x extra small font size",
			},
		},
		"--font-size-2xs": {
			value: {
				type: String,
				default: "10px",
			},
			description: {
				type: String,
				default: "2x extra small font size",
			},
		},
		"--font-size-xs": {
			value: {
				type: String,
				default: "12px",
			},
			description: {
				type: String,
				default: "Extra small font size",
			},
		},
		"--font-size-sm": {
			value: {
				type: String,
				default: "14px",
			},
			description: {
				type: String,
				default: "Small font size",
			},
		},
		"--font-size-md": {
			value: {
				type: String,
				default: "16px",
			},
			description: {
				type: String,
				default: "Medium font size",
			},
		},
		"--font-size-lg": {
			value: {
				type: String,
				default: "18px",
			},
			description: {
				type: String,
				default: "Large font size",
			},
		},
		"--font-size-xl": {
			value: {
				type: String,
				default: "20px",
			},
			description: {
				type: String,
				default: "Extra large font size",
			},
		},
		"--font-size-2xl": {
			value: {
				type: String,
				default: "24px",
			},
			description: {
				type: String,
				default: "2x extra large font size",
			},
		},
		"--font-size-3xl": {
			value: {
				type: String,
				default: "30px",
			},
			description: {
				type: String,
				default: "3x extra large font size",
			},
		},
	},
	{ _id: false },
);

const font_weight = new Schema(
	{
		"--font-weight-thin": {
			value: {
				type: Number,
				default: 100,
			},
			description: {
				type: String,
				default: "Thin font weight",
			},
		},
		"--font-weight-extralight": {
			value: {
				type: Number,
				default: 200,
			},
			description: {
				type: String,
				default: "Extra light font weight",
			},
		},
		"--font-weight-light": {
			value: {
				type: Number,
				default: 300,
			},
			description: {
				type: String,
				default: "Light font weight",
			},
		},
		"--font-weight-normal": {
			value: {
				type: Number,
				default: 400,
			},
			description: {
				type: String,
				default: "Normal font weight",
			},
		},
		"--font-weight-medium": {
			value: {
				type: Number,
				default: 500,
			},
			description: {
				type: String,
				default: "Medium font weight",
			},
		},
		"--font-weight-semibold": {
			value: {
				type: Number,
				default: 600,
			},
			description: {
				type: String,
				default: "Semi-bold font weight",
			},
		},
		"--font-weight-bold": {
			value: {
				type: Number,
				default: 700,
			},
			description: {
				type: String,
				default: "Bold font weight",
			},
		},
		"--font-weight-extrabold": {
			value: {
				type: Number,
				default: 800,
			},
			description: {
				type: String,
				default: "Extra-bold font weight",
			},
		},
		"--font-weight-black": {
			value: {
				type: Number,
				default: 900,
			},
			description: {
				type: String,
				default: "Black font weight",
			},
		},
	},
	{ _id: false },
);

const font_family = new Schema(
	{
		"--font-family-primary": {
			value: {
				type: String,
				default: "Inter",
			},
			description: {
				type: String,
				default: "Primary font family used across the app",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
			},
		},
		"--font-family-secondary": {
			value: {
				type: String,
				default: "Amethysta",
			},
			description: {
				type: String,
				default: "Secondary font family for less prominent text",
			},
			link: {
				type: String,
				default: "https://fonts.googleapis.com/css2?family=Amethysta&display=swap",
			},
		},
		"--font-family-navbar": {
			value: {
				type: String,
				default: "Poppins",
			},
			description: {
				type: String,
				default: "Font family used in the navigation bar",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
			},
		},
		"--font-family-heading": {
			value: {
				type: String,
				default: "Inknut Antiqua",
			},
			description: {
				type: String,
				default: "Font family used for headings and titles",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap",
			},
		},
		"--font-family-input": {
			value: {
				type: String,
				default: "Roboto",
			},
			description: {
				type: String,
				default: "Font family used for input fields and form elements",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
			},
		},
		"--font-family-light": {
			value: {
				type: String,
				default: "Nunito",
			},
			description: {
				type: String,
				default: "Font family used for small hint text and secondary elements",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
			},
		},
		"--font-family-button": {
			value: {
				type: String,
				default: "Itim",
			},
			description: {
				type: String,
				default: "Font family used for buttons",
			},
			link: {
				type: String,
				default: "https://fonts.googleapis.com/css2?family=Itim&display=swap",
			},
		},
		"--font-family-user": {
			value: {
				type: String,
				default: "Montserrat",
			},
			description: {
				type: String,
				default: "Font family used for user-related text",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
			},
		},
		"--font-family-number": {
			value: {
				type: String,
				default: "Crimson Pro",
			},
			description: {
				type: String,
				default: "Font family used for numeric text",
			},
			link: {
				type: String,
				default:
					"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap",
			},
		},
	},
	{ _id: false },
);

const border_radius = new Schema(
	{
		"--border-radius-primary": {
			value: {
				type: String,
				default: "5px",
			},
			description: {
				type: String,
				default: "Primary border radius used for general elements",
			},
		},
		"--border-radius-secondary": {
			value: {
				type: String,
				default: "10px",
			},
			description: {
				type: String,
				default: "Secondary border radius for larger containers or cards",
			},
		},
		"--border-radius-section": {
			value: {
				type: String,
				default: "10px",
			},
			description: {
				type: String,
				default: "Border radius applied to section containers",
			},
		},
		"--border-radius-input": {
			value: {
				type: String,
				default: "5px",
			},
			description: {
				type: String,
				default: "Border radius for input fields and text areas",
			},
		},
		"--border-radius-btn-filter": {
			value: {
				type: String,
				default: "10px",
			},
			description: {
				type: String,
				default: "Border radius for filter buttons",
			},
		},
		"--border-radius-btn-auth": {
			value: {
				type: String,
				default: "0px",
			},
			description: {
				type: String,
				default: "Border radius for authentication buttons like login/register",
			},
		},
		"--border-radius-btn-send": {
			value: {
				type: String,
				default: "5px",
			},
			description: {
				type: String,
				default: "Border radius for send/submit buttons",
			},
		},
		"--border-radius-btn-action": {
			value: {
				type: String,
				default: "0px",
			},
			description: {
				type: String,
				default: "Border radius for action buttons in forms or modals",
			},
		},
	},
	{ _id: false },
);

export const themeSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		minLength: 3,
		maxLength: 20,
	},
	active: {
		type: Boolean,
		default: false,
	},
	bg_color: {
		type: bg_color,
		default: {},
	},
	text_color: {
		type: text_color,
		default: {},
	},
	font_size: {
		type: font_size,
		default: {},
	},
	font_weight: {
		type: font_weight,
		default: {},
	},
	font_family: {
		type: font_family,
		default: {},
	},
	border_radius: {
		type: border_radius,
		default: {},
	},
});
