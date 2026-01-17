import type { IconProps } from "@types";

const Email = ({ width = 40, height = 40, fill = "", stroke = "#292D32", ...rest }: IconProps) => {
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
				d="M28.3334 34.1667H11.6667C6.66671 34.1667 3.33337 31.6667 3.33337 25.8333V14.1667C3.33337 8.33334 6.66671 5.83334 11.6667 5.83334H28.3334C33.3334 5.83334 36.6667 8.33334 36.6667 14.1667V25.8333C36.6667 31.6667 33.3334 34.1667 28.3334 34.1667Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28.3333 15L23.1166 19.1667C21.4 20.5333 18.5833 20.5333 16.8666 19.1667L11.6666 15"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Email;
