const express=require('express')
const {createProduct, getAllProducts, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController')
const router=express.Router()

router.route("/product/new").post(createProduct)
router.route("/products").get(getAllProducts)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)


module.exports=router