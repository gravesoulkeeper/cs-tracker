import { Text } from "@ui";

const baseClasses = "flex gap-3 items-center w-full";

const Or = () => {
	const classes = `${baseClasses}`;
	return (
		<div className={classes}>
			<span className="border border-light w-full"></span>
			<Text variant="light" children="or" />
			<span className="border border-light w-full"></span>
		</div>
	);
};

export default Or;
