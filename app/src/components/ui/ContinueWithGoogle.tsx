import { Google } from "@icons";
import { Button, Text } from "@ui";
import type { ButtonHTMLAttributes } from "react";

type ContinueWithGoogleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
};

const baseClasses =
	"flex gap-8 justify-center w-full items-center rounded-full bg-white border border-bsection";

const ContinueWithGoogle = (props: ContinueWithGoogleProps) => {
	const { className = "", ...rest } = props;
	const classes = `${baseClasses} ${className}`;

	return (
		<Button type="button" className={classes} {...rest}>
			<Google width={24} height={24} />
			<Text children="Continue With Google" />
		</Button>
	);
};

export default ContinueWithGoogle;
