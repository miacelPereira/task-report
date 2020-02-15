import express from "express";
import cors from "cors";
import { config } from "dotenv";
import routes from './routes';

class App {
  public express : express.Application;

  public constructor() {
    this.express = express();
    this.dontenv();
    this.middlewares();
    this.routes();
  }

  private middlewares() : void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() : void {
    this.express.use(routes);
  }

  private dontenv() : void {
    config();
  }
}

export default new App().express
