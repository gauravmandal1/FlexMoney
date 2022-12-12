import http from "http"
import express from "express"
import mongoose from "mongoose"
import CORS from "cors"
import * as dotenv from 'dotenv';
import userRouter from "./Routes/uerRoute.js"
import paymentRouter from "./Routes/paymentRoute.js"

const app = express()
dotenv.config(); 

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = "8000"|process.env.PORT


app.use(CORS())
app.use(express.json())

app.use("/user",userRouter)
app.use("/payment",paymentRouter)

//connecting mongodb
mongoose.connect(process.env.DB_LINK,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Database connection successfull.')
}).catch((err)=>{
    console.log(err)
})


const server = http.createServer(app);
//start the server
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`);
});