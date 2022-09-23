import express from "express";
import cors from "cors";
const app = express();
import routes from "./routes/auth.routes";
import { createmongoconnection } from "./db";
createmongoconnection();

import bodyParser from "body-parser";

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/chat", routes);
// app.use("/upload", express.static("uploads"));

export default app;
