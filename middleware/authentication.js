const jwt = require("jsonwebtoken")


const authentication=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded=jwt.verify(token,"secretkey")
        console.log(decoded)
        if(decoded){
            const userID=decoded.userID
            req.body.TodoID=userID
            console.log("middleware",userID,req.body.TodoID)
            next()
        }
        else{
            res.send("please login")
        }
    }
    else{
        res.send("please login")
    }
}

module.exports={authentication}