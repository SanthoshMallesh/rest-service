import { Sequelize } from "sequelize-typescript";
import models from "../src/models";
import * as dotenv from "dotenv";
dotenv.config();

const { POSTGRES_CONNECTION_STRING } = process.env;
const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING as string, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true,
  },
  logging: console.log,
});

sequelize.addModels([models.SampleType]);

export default sequelize;
