import express, { IRouter } from "express";

const router : IRouter = express.Router();

import { uploadCsvFile } from "../controllers/fileUpload.controller";
import multer from "multer";

const upload = multer({ dest: 'tmp/csv/' });


router.post('/upload', upload.single("file"), uploadCsvFile);

export default router