import type { IconProps } from "@types";

const ButtonOn = ({
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
				d="M27.75 6.43332H12.25C5.41671 6.43332 3.33337 8.51665 3.33337 15.35V24.65C3.33337 31.4833 5.41671 33.5667 12.25 33.5667H27.75C34.5834 33.5667 36.6667 31.4833 36.6667 24.65V15.35C36.6667 8.51665 34.5834 6.43332 27.75 6.43332ZM23.4834 21.8667C23.4834 25.6167 21.7334 27.3667 17.9834 27.3667H14.2667C10.5167 27.3667 8.76671 25.6167 8.76671 21.8667V18.15C8.76671 14.4 10.5167 12.65 14.2667 12.65H17.9834C21.7334 12.65 23.4834 14.4 23.4834 18.15V21.8667Z"
				fill={fill}
				stroke={stroke}
			/>
		</svg>
	);
};

export default ButtonOn;
