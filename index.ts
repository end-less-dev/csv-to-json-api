import http from "http"
import app from "./src/app"

const port = 8080;

const server = http.createServer(app)

server.listen(port,()=>{
    console.log("running")
})
