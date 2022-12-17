const express = require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const cors=require("cors")
require("dotenv").config()


const {connection} = require("./config/data")


// const {UserModel} = require("./model/user.module")

const{PackageRouter}=require("./router/Package.routes")

// const{authentication}=require("./middleware/authentication")

const app=express();



app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("welcome")
}) 

// app.post("/signup",async (req,res)=>{
//     const {email,password,name,age}=req.body
//     console.log(req.body)
//     const userPresent=await UserModel.findOne({email})
    
//     if(userPresent?.email){
//         res.send("try loggin in")
//     }
//     else{
//         try{
//             bcrypt.hash(password, 5,async function(err, decodepassword) {
//                 // Store hash in your password DB.
//                 const user=new UserModel({email,password:decodepassword,name,age})
//                 await user.save()
//                 res.send("sign up successfully")
//             });
            
//         }
//         catch(err){
//             console.log(err)
//             res.send("something wrong")
    
//         }

//     }
    
// })


// app.post("/login",async (req,res)=>{
//     // console.log(req.body) //this is data what we send
//     const{email,password}=req.body
//     try{
//         const user=await UserModel.find({email})
       

//         // console.log(hashed_password)
        
        
//         if(user.length>0){
//             const hashed_password=user[0].password
//             bcrypt.compare(password, hashed_password, function(err, result) {
//              if(result){
//                 const token = jwt.sign({"userID":user[0]._id}, 'secretkey');
//                 res.send({mesg:"Login successfull",token:token})
//                 console.log(token)
//                 console.log(user)

//              }
//              else{
//                 res.send("login failed")
//             } 
//             });
            
            
//         }
//         else{
//             res.send("login failed")
//         }
        
//     }
//     catch(err){
//         console.log(err)

//     }
// })



// app.use(authentication)
app.use("/package",PackageRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connection to db cloud")


    }
    catch(err){
        console.log(err)

    }
    console.log("working on 8001")
})