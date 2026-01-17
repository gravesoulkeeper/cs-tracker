import type { IconProps } from "@types";

const Mobile = ({ width = 40, height = 40, fill = "", stroke = "#292D32", ...rest }: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 34 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M33 11V31C33 39 31 41 23 41H11C3 41 1 39 1 31V11C1 3 3 1 11 1H23C31 1 33 3 33 11Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 8H13"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 35.2C18.7121 35.2 20.1 33.8121 20.1 32.1C20.1 30.3879 18.7121 29 17 29C15.2879 29 13.9 30.3879 13.9 32.1C13.9 33.8121 15.2879 35.2 17 35.2Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Mobile;
