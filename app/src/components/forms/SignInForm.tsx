import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { EyeClosed, EyeOpen } from "@icons";
import type { FormFields } from "@types";
import { Heading, ContinueWithGoogle, Or, LabeledInput, Text, VerifyHuman, Button } from "@ui";

type SignInFormProps = {
	title: string;
	redirectTo: string;
	className?: string;
};

const baseClasses = "min-w-[300px] sm:min-w-[500px] flex flex-col gap-[30px] py-10 mx-auto";

const SignInForm = (props: SignInFormProps) => {
	const { title, redirectTo, className = "", ...rest } = props;
	const classes = `${baseClasses} ${className}`;

	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({ mode: "onSubmit" });

	const onSubmit: SubmitHandler<FormFields> = () => {};

	return (
		<form className={classes} onSubmit={handleSubmit(onSubmit)} {...rest}>
			<Heading children={title} className="max-sm:text-lg" />
			<ContinueWithGoogle />
			<Or />
			<LabeledInput
				{...register("email", {
					required: "Email is required",
				})}
				error={Boolean(errors.email)}
				variant="email"
				name="email"
				label="Email Address"
				description={errors.email?.message}
			/>
			<LabeledInput
				{...register("password", {
					required: "Password is required",
					minLength: {
						value: 8,
						message: "Invalid password",
					},
					maxLength: {
						value: 40,
						message: "Invalid password",
					},
				})}
				error={Boolean(errors.password)}
				variant="password"
				type={`${showPassword ? "text" : "password"}`}
				name="password"
				label="Password"
				description={errors.password?.message}
				icon={{
					IconComponent: showPassword ? EyeOpen : EyeClosed,
					position: "right",
					onClick: () => {
						setShowPassword((prev) => !prev);
					},
				}}
			/>
			<Text variant="link" children="Forget your password" className="text-right" />
			<VerifyHuman register={register} errors={errors} />
			<Button variant="auth" children="Log in" />
			<div className="flex justify-center gap-1">
				<Text variant="secondary" children="New to Xtream?" />
				<Text variant="link" children="Create an account" href="/sign-up" />
			</div>
		</form>
	);
};

export default SignInForm;
