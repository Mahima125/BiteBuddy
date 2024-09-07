import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required: true, unique:true },
    password:{type:String, required:true},
    cartData:{type:Object,default:{}}
},{minimize: false})   // minimize false so that cart data is created as we havent provided any data

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;

