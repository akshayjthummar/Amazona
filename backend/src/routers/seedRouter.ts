import { Router, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { Product, ProductModel } from "../models/productModel";
import { sampleProducts } from "../data";

export const seedRouter = Router();

seedRouter.get(
  "/",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({});
    const createdProducts = await ProductModel.insertMany(sampleProducts);
    res.send({ createdProducts });
  })
);
