import type { FieldErrors, UseFormRegister } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import { Text } from "@ui";
import type { FormFields } from "@types";
import { RECAPTCHA_SITE_KEY } from "@config";

type VerifyHumanProps = {
	register: UseFormRegister<FormFields>;
	errors: FieldErrors<FormFields>;
};

const VerifyHuman = ({ register, errors }: VerifyHumanProps) => {
	register("recaptcha_key", { required: "Please verify you are human" });

	return (
		<div className="flex flex-col gap-[12px] justify-between">
			<ReCAPTCHA
				sitekey={RECAPTCHA_SITE_KEY}
				size="normal"
				onChange={(recaptcha_key) => {
					register("recaptcha_key").onChange({
						target: { name: "recaptcha_key", value: recaptcha_key || "" },
					});
				}}
				onExpired={() => {
					register("recaptcha_key").onChange({
						target: { name: "recaptcha_key", value: "" },
					});
				}}
				onError={() => {
					register("recaptcha_key").onChange({
						target: { name: "recaptcha_key", value: "" },
					});
				}}
			/>
			{errors.recaptcha_key && (
				<Text variant="dead" size="xs" children={errors.recaptcha_key.message} />
			)}
		</div>
	);
};

export default VerifyHuman;
