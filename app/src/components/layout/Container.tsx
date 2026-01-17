import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
	variant?: "primary" | "form";
	className?: string;
	children: ReactNode;
};

const variants = {
	variant: {
		primary: "px-[calc((100vw-1240px)/2)]",
		form: "flex justify-between items-center",
	},
};

//max width 1240px
const baseClasses = "min-h-screen bg-bprimary";

const Container = (props: ContainerProps) => {
	const { variant = "primary", className, children, ...rest } = props;
	const classes = `${baseClasses} ${variants.variant[variant]} ${className}`;

	return (
		<main className={classes} {...rest}>
			{children}
		</main>
	);
};

export default Container;
