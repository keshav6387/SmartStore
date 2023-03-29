const Product=require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


//creating a new product --Admin
const createProduct=catchAsyncErrors(async(req,res,next)=>{
        const product=await Product.create(req.body);
        res.status(200).json({
            success:true,
            product
        })

})

//Get all products

const getAllProducts=catchAsyncErrors(async(req,res)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products
    })
})



//update product --Admin

const updateProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404))
        
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})

    res.status(200).json({
        success:true,
        product
    })
})

//update product --Admin

const deleteProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404))
        
    }
    product= await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
})

//get product details
const getProductDetails=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404))
        
    }

    res.status(200).json({
        success:true,
        product
    })
})



module.exports={createProduct,getAllProducts,updateProduct,deleteProduct,getProductDetails}