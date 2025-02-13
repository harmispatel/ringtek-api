const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ringtek API",
      version: "1.0.0",
      description: "A RESTful API for Ringtek application",
    },
    servers: [
      {
        url: "ringtek-api-five.vercel.app/api",
        description: "Local server",
      },
    ],
  },
  apis: ["./swaggerControllers/*.js", "./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
