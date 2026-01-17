import type { IconProps } from "@types";

const ButtonPower = ({
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
			viewBox="0 0 24 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M17.7667 5.63333C20.9 7.56666 23 11.0333 23 15C23 21.0833 18.0833 26 12 26C5.91668 26 1 21.0833 1 15C1 11.0333 3.10002 7.56666 6.23336 5.63333"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 1V8.33332"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ButtonPower;
