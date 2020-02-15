import { Router } from "express";
import User from "./controllers/User";

const routes = Router();

routes.route("/users").get(User.index);

export default routes;
