import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./client";
import type { ApiResponse, UserData } from "@types";

export const profile = createAsyncThunk("profile", async (): Promise<UserData | null> => {
	const res = await api.get<ApiResponse<UserData>>("/users/me");
	if (res.data.success) return res.data.data;
	throw new Error("User Profile Failed");
});
