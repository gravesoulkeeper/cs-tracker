import type { IconProps } from "@types";

const HamBurger = ({
	width = 40,
	height = 40,
	fill = "#292D32",
	stroke = "",
	...rest
}: IconProps) => {
	return (
		<svg
			fill={fill}
			stroke={stroke}
			width={width}
			height={height}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			{...rest}
		>
			<rect x="3" y="6" width="18" height="2" rx="1" />
			<rect x="3" y="11" width="18" height="2" rx="1" />
			<rect x="3" y="16" width="18" height="2" rx="1" />
		</svg>
	);
};

export default HamBurger;
