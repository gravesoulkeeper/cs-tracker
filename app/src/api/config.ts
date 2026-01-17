import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "@api";
import type { ApiResponse, ConfigData } from "@types";

export const fetchConfig = createAsyncThunk(
	"fetchConfig",
	async (): Promise<ApiResponse<ConfigData>> => {
		const res = await api.get<ApiResponse<ConfigData>>("config");
		return res.data;
	},
);
