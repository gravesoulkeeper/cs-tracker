import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "filter" | "auth" | "send" | "action";
	size?: "sm" | "md" | "lg";
	className?: string;
	children: ReactNode;
};

const variants = {
	variant: {
		filter: "bg-bbfilter text-tbfilter rounded-bfilter",
		auth: "bg-bbauth text-tbauth rounded-bauth",
		send: "bg-bbsend text-tbsend rounded-bsend",
		action: "bg-bbaction text-tbaction rounded-baction",
	},
	size: {
		sm: "p-[10px] text-sm",
		md: "px-[20px] py-[13px] text-md",
		lg: "px-[30px] py-[13px] text-lg",
	},
};

const baseClasses = "w-full font-button hover:cursor-pointer hover:opacity-90";

const Button = (props: ButtonProps) => {
	const { variant = "action", size = "md", className = "", children, ...rest } = props;
	const classes = `${baseClasses} ${variants.variant[variant]} ${variants.size[size]} ${className}`;

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	);
};

export default Button;
