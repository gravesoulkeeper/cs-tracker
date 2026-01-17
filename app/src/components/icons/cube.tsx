import type { IconProps } from "@types";

const Cube = ({ width = 40, height = 40, fill = "", stroke = "#292D32", ...rest }: IconProps) => {
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
				d="M21.5333 3.76667L32.3833 9.61667C33.65 10.3 33.65 12.25 32.3833 12.9333L21.5333 18.7833C20.5666 19.3 19.4333 19.3 18.4666 18.7833L7.61663 12.9333C6.34996 12.25 6.34996 10.3 7.61663 9.61667L18.4666 3.76667C19.4333 3.25 20.5666 3.25 21.5333 3.76667Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.01671 16.8833L16.1 21.9333C17.35 22.5667 18.15 23.85 18.15 25.25V34.7833C18.15 36.1667 16.7 37.05 15.4667 36.4333L5.38337 31.3833C4.13337 30.75 3.33337 29.4667 3.33337 28.0667V18.5333C3.33337 17.15 4.78337 16.2667 6.01671 16.8833Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M33.9833 16.8833L23.9 21.9333C22.65 22.5667 21.85 23.85 21.85 25.25V34.7833C21.85 36.1667 23.3 37.05 24.5333 36.4333L34.6166 31.3833C35.8666 30.75 36.6666 29.4667 36.6666 28.0667V18.5333C36.6666 17.15 35.2166 16.2667 33.9833 16.8833Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Cube;
