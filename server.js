const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes/Routes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cors = require("cors");
const swaggerUiSetup = require("./swagger/swaggerUiSetup");
const NodeCache = require("node-cache");

dotenv.config();

connectDB();

const app = express();

var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

swaggerUiSetup(app);

const cache = new NodeCache();

app.delete("/api/cache/clear", (req, res) => {
  cache.flushAll();
  res.status(200).json({ message: "Cache cleared successfully!" });
});

app.use("/api", routes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 8182;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
