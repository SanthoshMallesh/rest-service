import express from "express";
import cors from "cors";
import config from "config";
import log from "./logger";
import routes from "./routes";
import "./sequelize";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(
  cors({
    origin: (_origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  routes(app);
});
