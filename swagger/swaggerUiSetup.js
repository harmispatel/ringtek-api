const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerSpec"); // Import the swagger specification

const swaggerUiSetup = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerUiSetup;
