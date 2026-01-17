import { createSlice } from "@reduxjs/toolkit";

import type { AuthData } from "@types";
import { registerUser, getAccessToken, profile } from "@api";

const initialState: AuthData = {
	is_authenticated: false,
	access_token: null,
	user_data: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// for registering new users
			.addCase(registerUser.fulfilled, (state, action) => {
				Object.assign(state, action.payload);
			})
			.addCase(registerUser.rejected, () => {
				return {
					is_authenticated: false,
					access_token: null,
					user_data: null,
				};
			})
			// for the access token
			.addCase(getAccessToken.fulfilled, (state, action) => {
				return { ...state, ...action.payload };
			})
			.addCase(getAccessToken.rejected, () => {
				return {
					is_authenticated: false,
					access_token: null,
					user_data: null,
				};
			})
			// for profile
			.addCase(profile.fulfilled, (state, action) => {
				state.user_data = action.payload;
			})
			.addCase(profile.rejected, (state) => {
				state.user_data = null;
			});
	},
});

export default authSlice.reducer;
