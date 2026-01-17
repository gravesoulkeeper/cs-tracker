import type { IconProps } from "@types";

const BannedCircle = ({
	width = 40,
	height = 40,
	fill = "",
	stroke = "#292D32",
	...rest
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M20 36.6667C29.2048 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7953 29.2048 3.33333 20 3.33333C10.7953 3.33333 3.33337 10.7953 3.33337 20C3.33337 29.2047 10.7953 36.6667 20 36.6667Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				d="M8.33337 8.33333L31.6667 31.6667"
				fill={fill}
				stroke={stroke}
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default BannedCircle;
