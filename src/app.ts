import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.get("/", (req: Request, res: Response) => {
    res.send("dummy app to test CI/CD")
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server runnning on PORT ${PORT}`);
});
