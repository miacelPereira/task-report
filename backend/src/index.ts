import express from "express";
import { config } from "dotenv";
import cors from "cors";
import routes from "./routes";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

export default app;
