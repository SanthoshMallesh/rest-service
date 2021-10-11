import { Express, Request, Response } from "express";
import { healthCheckHandler } from "./controller/healthcheck.controller";

export default function (app: Express) {
  app.get("/healthcheck", healthCheckHandler);
}
