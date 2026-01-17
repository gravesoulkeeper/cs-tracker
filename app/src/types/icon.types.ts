import type { SVGAttributes } from "react";

export type IconProps = SVGAttributes<SVGElement> & {
	width?: number;
	height?: number;
	fill?: string;
	stroke?: string;
};
