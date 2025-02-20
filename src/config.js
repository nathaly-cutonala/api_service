import * as awilix from "awilix";
const { Lifetime } = awilix;

config();

const port = process.env.PORT || 8080;

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  };

  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC,
    strict: true,
  });
  
  export default container;

  container.register = {
    serverPort: awilix.asValue(port),
    db_config: awilix.asValue(dbConfig),
  };

  container.register({
    //debugging: awilix.asValue(process.env.NODE_ENV === "development"),
    sequelize: awilix.asFunction(require("./db/connection").default, {
      lifetime: Lifetime.SINGLETON,
    }),
  });

  container.register({
    authService: awilix.asClass(require("./services/auth.js").default),
  });
  
  container.register({
    //authMiddleware: awilix.asClass(require("./middlewares/auth").default),
  });
  
  container.register({
    authControllers: awilix.asClass(require("./controllers/auth.js").default),
  });