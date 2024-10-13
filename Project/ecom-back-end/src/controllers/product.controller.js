import { Product } from "../models/products.model.js";

import asyncHandler from "../utils/asyncHandler.js";

const postProducts = asyncHandler(async (req, res) => {
    try {
        const products = req.body.products;
    
        await Product.insertMany(products);
    
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default postProducts;
