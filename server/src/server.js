import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { router as UsersController } from "./controllers/users.controller.js";
import { authenticationToken } from "./middlewares/authentication.js";

const app = express();

export default class Server {
  constructor() {
    dotenv.config();
    app.use(express.json());
    app.use(helmet());
    app.use(morgan("dev"));
    // Headers
    app.use((req, res, next) => {
      // On later stage have specify the domains that are allowed to communicate with the server
      res.header("Content-type", "application/json");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      // To think for Api name
      res.header("X-Powered-By", "RestApi");
      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        return res.status(200).json({});
      }
      next();
    });
  }

  applyConfigurations() {
    // Routes
    app.use("/api/users", UsersController);
    // To improve error handling !!
    // Error handling
    app.use((req, res, next) => {
      const error = new Error("Url not found!");
      error.status = 404;
      next(error);
    });

    app.use((error, req, res, next) => {
      res.status(error.status || 500);
      res.json({
        error: { message: error.message },
      });
    });
  }

  start() {
    const PORT = process.env.SERVER_PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  }
}
