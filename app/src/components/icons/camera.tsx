import type { IconProps } from "@types";

const Camera = ({ width = 40, height = 40, fill = "", stroke = "#292D32", ...rest }: IconProps) => {
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
				d="M11.2667 36.6667H28.7333C33.3333 36.6667 35.1667 33.85 35.3833 30.4167L36.25 16.65C36.4833 13.05 33.6167 10 30 10C28.9833 10 28.05 9.41668 27.5833 8.51668L26.3833 6.10001C25.6167 4.58334 23.6167 3.33334 21.9167 3.33334H18.1C16.3833 3.33334 14.3833 4.58334 13.6167 6.10001L12.4167 8.51668C11.95 9.41668 11.0167 10 9.99999 10C6.38333 10 3.51666 13.05 3.74999 16.65L4.61666 30.4167C4.81666 33.85 6.66666 36.6667 11.2667 36.6667Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.5 13.3333H22.5"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 30C22.9834 30 25.4167 27.5667 25.4167 24.5833C25.4167 21.6 22.9834 19.1667 20 19.1667C17.0167 19.1667 14.5834 21.6 14.5834 24.5833C14.5834 27.5667 17.0167 30 20 30Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Camera;
