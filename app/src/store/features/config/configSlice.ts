import { createSlice } from "@reduxjs/toolkit";

import { fetchConfig } from "@api";
import type { ConfigData, InitialStateProps } from "@types";

const initialState: InitialStateProps<ConfigData> = {
	success: false,
	status: 400,
	data: null,
	error: null,
	loading: false,
};

const configSlice = createSlice({
	name: "config",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchConfig.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchConfig.fulfilled, (state, action) => {
				Object.assign(state, action.payload);
				state.loading = false;
			})
			.addCase(fetchConfig.rejected, () => {
				return {
					success: false,
					status: 400,
					error: null,
					loading: false,
				};
			});
	},
});

export default configSlice.reducer;
