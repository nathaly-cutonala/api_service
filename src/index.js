import app from "./app.js";
import container from "./config.js";

(async () => {
  const port = container.cradle.serverPort;
  const db = container.cradle.sequelize;
  await db.authenticate();

console.log("Connection has been established successfully.");
app.listen(port, async () => {
    console.log(`listening on http://localhost:${port}`);
  });
})();