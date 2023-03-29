const Product=require("../models/productModel")



//creating a new product --Admin
const createProduct=async(req,res,next)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json({
            success:true,
            product
        })
    }catch(err){
        console.log(err)
    }
}

//Get all products

const getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}



module.exports={createProduct,getAllProducts}