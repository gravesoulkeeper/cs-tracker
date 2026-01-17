import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/features/config/configSlice";
import authReducer from "@/store/features/auth/authSlice";

const store = configureStore({
	reducer: {
		config: cartReducer,
		auth: authReducer,
	},
});

export default store;
