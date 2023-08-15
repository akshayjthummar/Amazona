import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DbConnect from "../connection";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";

dotenv.config();

DbConnect();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
