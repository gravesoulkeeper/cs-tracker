import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import router from "@routes";
import { initSite } from "@utils";
import { profile } from "@api";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
	const { is_authenticated } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	useEffect(() => {
		initSite();
		dispatch(profile());
	}, [is_authenticated]);

	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};

export default App;
