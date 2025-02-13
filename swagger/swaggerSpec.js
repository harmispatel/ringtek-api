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
        // Specify the correct URL for your live server or local server
        url: "https://ringtek-api-five.vercel.app/api", // Updated to full URL
        description: "Production server",
      },
      {
        url: "http://localhost:3000/api", // Local server for development
        description: "Local development server",
      },
    ],
  },
  apis: ["./swaggerControllers/*.js", "./routes/*.js"], // Ensure these paths are correct based on your folder structure
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
