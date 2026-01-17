import type { IconProps } from "@types";

const ArrowUp = ({
	width = 40,
	height = 40,
	fill = "#292D32",
	stroke = "",
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
				d="M33.2 26.3333C32.8834 26.3333 32.5667 26.2167 32.3167 25.9667L21.45 15.1C20.65 14.3 19.35 14.3 18.55 15.1L7.68337 25.9667C7.20003 26.45 6.40003 26.45 5.9167 25.9667C5.43337 25.4833 5.43337 24.6833 5.9167 24.2L16.7834 13.3333C18.55 11.5667 21.4334 11.5667 23.2167 13.3333L34.0834 24.2C34.5667 24.6833 34.5667 25.4833 34.0834 25.9667C33.8334 26.2 33.5167 26.3333 33.2 26.3333Z"
				fill={fill}
				stroke={stroke}
			/>
		</svg>
	);
};

export default ArrowUp;
