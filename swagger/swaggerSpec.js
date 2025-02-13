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
        url: "http://localhost:8181/api",
        description: "Local server",
      },
      {
        url: "https://ringtek-api-five.vercel.app/",
        description: "Vercel server",
      },
    ],
  },
  apis: ["./swaggerControllers/*.js", "./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
