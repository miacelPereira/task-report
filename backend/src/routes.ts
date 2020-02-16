import { Router } from "express";
import User from "./controllers/User";
import Validator from "./utils/Validator";

class ApiRoutes {
  private routes: Router;

  constructor() {
    this.routes = Router();
  }

  public getRoutes() {
    this.routes
      .route("/users")
      .get((r, rs) => User.index(r, rs))
      .post(Validator.ValidateUser, (r, rs) => User.store(r, rs));

    return this.routes;
  }
}

export default new ApiRoutes();
