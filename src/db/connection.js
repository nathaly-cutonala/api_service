import { Sequelize } from "sequelize";

export default (dbConfig) => {
  return new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: "mysql",
    logging: false
  });
};
