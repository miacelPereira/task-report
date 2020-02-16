import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import ApiRoutes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    dontenv.config();
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(ApiRoutes.getRoutes());
  }
}

export default new App().express;
