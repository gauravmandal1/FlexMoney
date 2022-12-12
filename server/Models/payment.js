import mongoose from 'mongoose'

//Payment schema
const paymentSchema=new mongoose.Schema({
      "card":{
          type:Object,
          "holderName":{
              type:String
          },
          "expirationDate":{
              type:String
          },
          "cardNo":{
              type:String
          },
          "cvvCode":{
              type:String
          }
      },
      "upiId":{
          type:String
      },
      "email":{
          type:String,
          required:true
      }
})
export default mongoose.model("paymentCollection",paymentSchema)