import type { HTMLAttributes, ReactNode } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	children: ReactNode;
};

const variants = {
	variant: {
		h1: "text-3xl",
		h2: "text-2xl",
		h3: "text-xl",
		h4: "text-lg",
		h5: "text-md",
		h6: "text-sm",
	},
};

const baseClasses = "font-heading text-theading text-center";

const Heading = (props: HeadingProps) => {
	const { variant: Tag = "h2", className = "", children, ...rest } = props;
	const classes = `${baseClasses} ${variants.variant[Tag]} ${className}`;

	return (
		<Tag className={classes} {...rest}>
			{children}
		</Tag>
	);
};

export default Heading;
