import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./client";
import type { ApiResponse, RegisterRequest, AuthData, TokenData } from "@types";

export const registerUser = createAsyncThunk(
	"registerUser",
	async (user: RegisterRequest): Promise<AuthData> => {
		const res = await api.post<ApiResponse<AuthData>>("auth/register", user, {
			withCredentials: true,
		});
		if (res.data.success) return res.data.data;
		throw new Error("Register User Failed");
	},
);

export const getAccessToken = createAsyncThunk("accessToken", async (): Promise<TokenData> => {
	const res = await api.post<ApiResponse<TokenData>>("auth/refresh-token");
	if (res.data.success) return res.data.data;
	throw new Error("Token refresh failed");
});
