import type { IconProps } from "@types";

const Refresh = ({
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
				d="M36.6667 20C36.6667 29.2 29.2 36.6667 20 36.6667C10.8 36.6667 5.18337 27.4 5.18337 27.4M5.18337 27.4H12.7167M5.18337 27.4V35.7333M3.33337 20C3.33337 10.8 10.7334 3.33333 20 3.33333C31.1167 3.33333 36.6667 12.6 36.6667 12.6M36.6667 12.6V4.26666M36.6667 12.6H29.2667"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Refresh;
