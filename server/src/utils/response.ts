type ApiPayload<T = unknown> =
	| {
			success: true;
			data: T;
			status: number;
	  }
	| {
			success: false;
			error: string;
			status: number;
	  };

export class ApiResponse<T = unknown> {
	public success: boolean;
	public status: number;
	public data?: T;
	public error?: string;

	constructor(payload: ApiPayload<T>) {
		this.success = payload.success;
		this.status = payload.status;

		if (payload.success) {
			this.data = payload.data;
		} else {
			this.error = payload.error;
		}
	}

	static success<T>(data: T, status: number = 200): ApiResponse<T> {
		return new ApiResponse({ success: true, data, status });
	}

	static error(error: string = "Something went wrong", status: number = 500): ApiResponse {
		return new ApiResponse({ success: false, error, status });
	}
}
