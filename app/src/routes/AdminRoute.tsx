import { Outlet, Navigate } from "react-router-dom";
import store from "@store";

const AdminRoute = () => {
	const { is_authenticated, user_data } = store.getState().auth;
	if (is_authenticated && user_data?.tag === "member") return <Navigate to="/sign-in" replace />;
	return <Outlet />;
};

export default AdminRoute;
