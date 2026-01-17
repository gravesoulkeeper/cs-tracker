import type {
	ElementType,
	InputHTMLAttributes,
	SVGAttributes,
	TextareaHTMLAttributes,
} from "react";

import Text from "./Text";

type IconProps = {
	IconComponent: ElementType;
	position?: "left" | "right";
	className?: string;
};

type BaseProps = {
	width?: string;
	height?: string;
	error?: boolean;
	icon?: IconProps & SVGAttributes<SVGElement>;
	label?: string;
	variant?: "text" | "email" | "password" | "textarea";
	size?: "sm" | "md" | "lg";
	description?: string;
	name: string;
	className?: string;
};

type InputVariantProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaVariantProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

type LabeledInputProps = InputVariantProps | TextareaVariantProps;

const variants = {
	size: {
		sm: "h-[30px] text-sm",
		md: "h-[35px] text-sm",
		lg: "h-[40px] text-md",
	},
	iconPosition: {
		left: "left-4",
		right: "right-4 ",
	},
};

const baseClasses =
	"w-full bg-binput font-input border border-light rounded-input focus:border focus:border-black focus:outline-none ";

const LabeledInput = (props: LabeledInputProps) => {
	const {
		width,
		height,
		error = false,
		icon,
		label,
		variant = "text",
		size = "md",
		description,
		name, // input name
		className = "",
		...rest
	} = props;
	const {
		IconComponent,
		position: iconPosition = "left",
		className: iconClassName = "",
		...iconRest
	} = icon || {};

	const paddingLeft = IconComponent ? (iconPosition === "left" ? "50px" : "20px") : "20px";
	const paddingRight = IconComponent ? (iconPosition === "right" ? "50px" : "20px") : "20px";

	const iconWidth =
		(size === "sm" && "20px") || (size === "md" && "24px") || (size === "lg" && "30px");
	const iconHeight =
		(size === "sm" && "20px") || (size === "md" && "24px") || (size === "lg" && "30px");

	const classes = `${baseClasses} ${variants.size[size]} ${error ? "text-tdead" : "text-tinput"} ${className}`;

	return (
		<div className="w-full flex flex-col gap-[12px] justify-between" style={{ width, height }}>
			{label && (
				<label htmlFor={name} className="text-tprimary text-md font-secondary">
					{label}
				</label>
			)}

			<div className={`${IconComponent ? "relative" : "static"}`}>
				{variant === "textarea" ? (
					<textarea
						className={classes}
						id={name}
						name={name}
						style={{ paddingLeft, paddingRight }}
						{...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
					></textarea>
				) : (
					<input
						className={classes}
						type={variant}
						id={name}
						name={name}
						style={{ paddingLeft, paddingRight }}
						{...(rest as InputHTMLAttributes<HTMLInputElement>)}
					/>
				)}
				{IconComponent && (
					<IconComponent
						className={`${variants.iconPosition[iconPosition]} absolute top-[5px] cursor-pointer ${iconClassName}`}
						width={iconWidth}
						height={iconHeight}
						{...iconRest}
					/>
				)}
			</div>

			{description && (
				<Text className="w-full" size="xs" variant={`${error ? "dead" : "light"}`}>
					{description}
				</Text>
			)}
		</div>
	);
};

export default LabeledInput;
