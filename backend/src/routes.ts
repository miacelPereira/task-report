import { Router } from "express";
import User from "./controllers/User";
import Validator from "./utils/Validator";

class ApiRoutes {
  public static getRoutes() {
    const routes = Router();

    routes
      .route("/users")
      .get(User.index)
      .post(Validator.ValidateUser, User.store);

    routes
      .route("/users/:id")
      .delete(User.destroy);
    
    return routes;
  }
}

export default ApiRoutes;
