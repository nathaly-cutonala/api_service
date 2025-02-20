import express from "express";
const app = express();              
import router from "./routes"
app.use(express.json());

app.use('api', router);

export default app;