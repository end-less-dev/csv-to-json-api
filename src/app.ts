import express, {Express} from "express";
import bodyParser from "body-parser";
import router from "./routes/file-upload-route";

const app : Express = express();

app.use(bodyParser.json())
app.use("/api", router)


export default app