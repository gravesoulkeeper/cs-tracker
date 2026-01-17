import { Outlet, Navigate } from "react-router-dom";
import store from "@store";

const ProtectedRoute = () => {
	const { is_authenticated } = store.getState().auth;
	if (is_authenticated) return <Outlet />;
	return <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
