import type { IconProps } from "@types";

const EyeClosed = ({
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
				d="M24.2167 15.7833L15.7833 24.2167C14.7 23.1333 14.0333 21.65 14.0333 20C14.0333 16.7 16.7 14.0333 20 14.0333C21.65 14.0333 23.1333 14.7 24.2167 15.7833Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M29.7 9.61666C26.7833 7.41666 23.45 6.21666 20 6.21666C14.1167 6.21666 8.63332 9.68333 4.81665 15.6833C3.31665 18.0333 3.31665 21.9833 4.81665 24.3333C6.13332 26.4 7.66665 28.1833 9.33332 29.6167"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.0333 32.55C15.9333 33.35 17.95 33.7833 20 33.7833C25.8833 33.7833 31.3667 30.3167 35.1833 24.3167C36.6833 21.9667 36.6833 18.0167 35.1833 15.6667C34.6333 14.8 34.0333 13.9833 33.4167 13.2167"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M25.85 21.1667C25.4167 23.5167 23.5 25.4333 21.15 25.8667"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.7834 24.2167L3.33337 36.6667"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M36.6667 3.33333L24.2167 15.7833"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default EyeClosed;
