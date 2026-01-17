import multer from "multer";

const storage = multer.diskStorage({
	destination: function (_req, _file, cb) {
		cb(null, "uploads/");
	},
	filename: function (_req, file, cb) {
		const filename = (
			file.originalname.split(".")[0] +
			String(Date.now()) +
			"." +
			file.originalname.split(".")[1]
		).replace(/ /g, "");
		cb(null, filename);
	},
});

export const upload = multer({ storage });
