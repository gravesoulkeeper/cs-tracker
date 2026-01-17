import { useAppSelector } from "@store";
import { SERVER_URL } from "@config";
import { Container } from "@layout";
import { SignInForm } from "@forms";

const SignIn = () => {
	const selector = useAppSelector((state) => state.config);
	return (
		<Container variant="form">
			<SignInForm title="Sign in to Xtream" redirectTo="/dashboard" />
			{selector.success && selector.data?.signin_image && (
				<img
					src={`${SERVER_URL}/${selector.data.signin_image}`}
					className="hidden xl:block w-[50%] min-h-screen object-cover"
				/>
			)}
		</Container>
	);
};

export default SignIn;
