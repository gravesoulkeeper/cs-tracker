import type { HTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type TextProps =
	| ({
			variant?: "primary" | "secondary" | "light" | "alive" | "dead" | "user" | "number";
			size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
			className?: string;
			children: ReactNode;
	  } & HTMLAttributes<HTMLParagraphElement>)
	| ({
			variant: "link";
			size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
			className?: string;
			children: ReactNode;
	  } & AnchorHTMLAttributes<HTMLAnchorElement>);

const variants = {
	variant: {
		primary: "text-tprimary font-primary",
		secondary: "text-tsecondary font-secondary",
		link: "text-tprimary font-primary underline",
		light: "text-light font-light",
		alive: "text-talive font-secondary",
		dead: "text-tdead font-secondary",
		user: "text-tprimary font-user",
		number: "text-tprimary font-number",
	},
	size: {
		"3xs": "text-3xs",
		"2xs": "text-2xs",
		xs: "text-xs",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
	},
};

const Text = (props: TextProps) => {
	const { variant = "primary", size = "md", className = "", children, ...rest } = props;
	const classes = `${variants.variant[variant]} ${variants.size[size]} ${className}`;

	if (variant === "link") {
		return (
			<a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
				{children}
			</a>
		);
	}

	return (
		<p className={classes} {...(rest as HTMLAttributes<HTMLParagraphElement>)}>
			{children}
		</p>
	);
};

export default Text;
