import { Request, Response } from "express";
import log from "../logger";

import SampleType from "../models/sampleType.model";

export async function healthCheckHandler(req: Request, res: Response) {
  try {
    const sampleType = await SampleType.findAll({
      attributes: ["id", "name", "enabled"],
      where: {
        enabled: true,
      },
    });
    return res.send(sampleType);
  } catch (e: any) {
    console.log(JSON.stringify(e));
    log.error(e);
    return res.status(409).send(e.message);
  }
}
