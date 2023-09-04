import express from "express"
import { createProduct, getAllProducts } from "../controllers/product-controller.js"

const productRouter = express.Router()

productRouter.get('/products', getAllProducts)
productRouter.post('/products', createProduct)


export default productRouter