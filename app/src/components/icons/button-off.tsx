import type { IconProps } from "@types";

const ButtonOff = ({
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
				d="M27.75 6.43332H12.25C5.41671 6.43332 3.33337 8.51665 3.33337 15.35V24.65C3.33337 31.4833 5.41671 33.5667 12.25 33.5667H27.75C34.5834 33.5667 36.6667 31.4833 36.6667 24.65V15.35C36.6667 8.51665 34.5834 6.43332 27.75 6.43332ZM31.2334 21.8667C31.2334 25.6167 29.4834 27.3667 25.7334 27.3667H22.0167C18.2667 27.3667 16.5167 25.6167 16.5167 21.8667V18.15C16.5167 14.4 18.2667 12.65 22.0167 12.65H25.7334C29.4834 12.65 31.2334 14.4 31.2334 18.15V21.8667Z"
				fill={fill}
				stroke={stroke}
			/>
		</svg>
	);
};

export default ButtonOff;
