import type { RequestHandler, Request, Response, NextFunction } from "express";

export const asyncHandler = (requestHandler: RequestHandler): RequestHandler => {
	return (req: Request, res: Response, next: NextFunction): void => {
		Promise.resolve(requestHandler(req, res, next)).catch((err): void => next(err));
	};
};
