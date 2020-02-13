import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();

export default express().use([
  cors,
  express.json,
  express.urlencoded({ extended: true })
]);
