import { Request, Response } from "express";
import log from "../logger";

export async function healthCheckHandler(req: Request, res: Response) {
  try {
    return res.send(req + "healthcheck.controller");
  } catch (e) {
    console.log(JSON.stringify(e));
    log.error(e);
    return res.status(409).send(e.message);
  }
}
