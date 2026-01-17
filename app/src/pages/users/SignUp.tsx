import { useAppSelector } from "@store";
import { SERVER_URL } from "@config";
import { Container } from "@layout";
import { SignUpForm } from "@forms";

const SignUp = () => {
	const selector = useAppSelector((state) => state.config);
	return (
		<Container variant="form">
			<SignUpForm title="Create an account" redirectTo="/dashboard" />
			{selector.success && selector.data?.signup_image && (
				<img
					src={`${SERVER_URL}/${selector.data.signup_image}`}
					className="hidden xl:block w-[50%] min-h-screen object-cover"
				/>
			)}
		</Container>
	);
};

export default SignUp;
