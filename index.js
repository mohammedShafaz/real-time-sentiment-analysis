import express, { json } from "express";
import dotenv from "dotenv";
import routes from "./api/routes/index.js"
dotenv.config()

const port = parseInt(process.env.PORT) || 5000;
const app = express();

app.use(json());
app.use('/', routes);
app.listen(port, () => {
    console.log(`server started running at http://localhost:${port}`);
})