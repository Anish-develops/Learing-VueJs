import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
   { id : String,
    name : String,
    price : String,
    description : String,
    imageUrl : String,
    averageRating : String}
);

export const Product = mongoose.model("Product", productSchema);
