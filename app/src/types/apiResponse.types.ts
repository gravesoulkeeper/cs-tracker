export type ApiResponse<D = unknown> =
	| {
			success: true;
			status: number;
			data: D;
	  }
	| {
			success: false;
			status: number;
			error: string;
	  };
