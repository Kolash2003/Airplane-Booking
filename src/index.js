const express = require("express");
const apiRoutes = require("./routes");

const { ServerConfig, Logger } = require("./config/index.js");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server running on port ${ServerConfig.PORT}`);
  Logger.info("Successfully Started the server", {});
});
