import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { registerUser } from "@api";
import { EyeClosed, EyeOpen } from "@icons";
import type { FormFields } from "@types";
import { useAppDispatch, useAppSelector } from "@store";
import { Heading, ContinueWithGoogle, Or, LabeledInput, Text, VerifyHuman, Button } from "@ui";

type SignUpFormProps = {
	title: string;
	redirectTo: string;
	className?: string;
};

const baseClasses = "max-w-[300px] sm:min-w-[500px] flex flex-col gap-[30px] py-10 mx-auto";

const SignUpForm = (props: SignUpFormProps) => {
	const { title, redirectTo, className = "", ...rest } = props;
	const classes = `${baseClasses} ${className}`;
	const [showPassword, setShowPassword] = useState(false);

	const { is_authenticated } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({ mode: "onChange" });

	const onSubmit: SubmitHandler<FormFields> = async (data) => await dispatch(registerUser(data));

	useEffect(() => {
		if (is_authenticated) {
			toast.success("Registration went successfull");
			navigate("/", { replace: true });
		}
	}, [is_authenticated]);

	return (
		<form className={classes} onSubmit={handleSubmit(onSubmit)} {...rest}>
			<div className="flex justify-between items-end">
				<Heading children={title} className="max-sm:text-lg" />
				<Text variant="link" children="log in instead" href="/sign-in" />
			</div>
			<ContinueWithGoogle />
			<Or />
			<LabeledInput
				{...register("display_name", {
					required: true,
					minLength: 3,
					maxLength: 20,
				})}
				error={Boolean(errors.display_name)}
				variant="text"
				name="display_name"
				label="Display Name"
				description="Should only contain 3–20 characters, and should match the style of the game server name so that data can be fetched correctly from the server."
			/>
			<LabeledInput
				{...register("username", {
					required: true,
					minLength: 3,
					maxLength: 20,
					pattern: /^[A-Za-z0-9]+$/,
				})}
				error={Boolean(errors.username)}
				variant="text"
				name="username"
				label="Username"
				description="Username should only contain 3-20 characters. only uppercase, lowercase and digits are allowed."
			/>
			<LabeledInput
				{...register("email", {
					required: "Email is required",
				})}
				error={Boolean(errors.email)}
				variant="email"
				name="email"
				label="Email"
				description={errors.email?.message}
			/>
			<LabeledInput
				{...register("password", {
					required: true,
					minLength: 8,
					maxLength: 40,
					pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
				})}
				error={Boolean(errors.password)}
				variant="password"
				type={`${showPassword ? "text" : "password"}`}
				name="password"
				label="Password"
				description="Must be 8–40 characters long, include at least one uppercase letter, one lowercase letter, one number and one special character."
				icon={{
					IconComponent: showPassword ? EyeOpen : EyeClosed,
					position: "right",
					onClick: () => {
						setShowPassword((prev) => !prev);
					},
				}}
			/>
			<VerifyHuman register={register} errors={errors} />
			<Button
				disabled={isSubmitting}
				variant="auth"
				children={isSubmitting ? "Loading..." : "Create an account"}
			/>
		</form>
	);
};

export default SignUpForm;
