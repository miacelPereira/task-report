import { Router } from "express";

const routes = Router();

routes.get("/", (_, res) => {
    res.send("Task Report - API");
});

export default routes;
