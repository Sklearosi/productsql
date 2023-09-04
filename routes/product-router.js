import express from "express"
import { createProduct, getAllProducts } from "../controllers/product-controller.js"

const productRouter = express.Router()

productRouter.get('/products', getAllProducts)
productRouter.post('/products', createProduct)
productRouter.delete('/products/:id',)

export default productRouter