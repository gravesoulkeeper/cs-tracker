import type { IconProps } from "@types";

const Internet = ({
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
				d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33334 20 3.33334C10.7953 3.33334 3.33337 10.7953 3.33337 20C3.33337 29.2048 10.7953 36.6667 20 36.6667Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.3333 5H15C11.75 14.7333 11.75 25.2667 15 35H13.3333"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M25 5C28.25 14.7333 28.25 25.2667 25 35"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5 26.6667V25C14.7333 28.25 25.2667 28.25 35 25V26.6667"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5 15C14.7333 11.75 25.2667 11.75 35 15"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Internet;
