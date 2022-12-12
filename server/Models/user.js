import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "age":{
        type:Number,
        required:true
    },
    "gender":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true,
        
    },
    "startDate":{
        type:String,
        required:true
    },
    "batchNumber":{
        type:Number,
        required:true
    },
    "feesPaid":{
        type:Number,
        required:true
    }
})

export default mongoose.model("userCollection",userSchema)