import type { IconProps } from "@types";

const Monitor = ({
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
				d="M10.7334 3.33334H29.25C35.1834 3.33334 36.6667 4.81668 36.6667 10.7333V21.2833C36.6667 27.2167 35.1834 28.6833 29.2667 28.6833H10.7334C4.81671 28.7 3.33337 27.2167 3.33337 21.3V10.7333C3.33337 4.81668 4.81671 3.33334 10.7334 3.33334Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 28.7V36.6667"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.33337 21.6667H36.6667"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.5 36.6667H27.5"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Monitor;
