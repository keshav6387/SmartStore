const User=require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt=require("bcryptjs");
const sendToken = require("../utils/jwtToken");


const registerUser=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password}=req.body;
    const user=await User.create({name,email,password,avatar:{public_id:"sampleid",url:"sampleurl"}})
    sendToken(user,200,res)

})



const loginUser=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return next(new ErrorHandler ("Please Enter Email & Password",400))
    }

    const user=await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",401))
    }

    const passwordMatched=await bcrypt.compare(password,user.password);
    if(!passwordMatched){
        return next(new ErrorHandler("Invalid Email or Password",401))
    }
    sendToken(user,200,res)



})

module.exports={registerUser,loginUser}