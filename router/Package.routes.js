const express =require("express")

const {PackageModule}=require("../model/Package.module")

const PackageRouter =express.Router()


PackageRouter.get("/",async(req,res)=>{
    const userID=req.body.TodoID
    try{
        const notes=await PackageModule.find()
        res.send(notes)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})


PackageRouter.post("/create",async (req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        await PackageModule.insertMany(payload)
        // const new_note=new PackageModule(payload)
        // await new_note.save()
        res.send({"mesg":"Notes create successfully"})
    }

    catch(err)
    {
        console.log(err)
        res.send({"err":"something wrong"})
    }
})



// PackageRouter.patch("/update/:todoid",async(req,res)=>{
//     const userID=req.body.TodoID
//     const payload=req.body;
//     const todoID=req.params.todoid
//     const todo=await PackageModule.findOne({_id:todoID})
//     console.log("to",todo.TodoID,"use",userID)

//     if(userID!==todo.TodoID){
//         res.send("not authorised")

//     }
//     else{
        
//         try{
//             await PackageModule.findByIdAndUpdate({_id:todoID},payload)
//              res.send("Notes update")
//         }
//         catch(err){
//             console.log(err)

//         }

//     }
    
// })


// PackageRouter.delete("/delete/:todoid",async (req,res)=>{
//     const userID=req.body.TodoID
//     // const payload=req.body;
//     const todoID=req.params.todoid
//     const todo=await PackageModule.findOne({_id:todoID})
//     // console.log("not",note.NoteID,"use",userID)

//     if(userID!==todo.TodoID){
//         res.send("not authorised")

//     }
//     else{
//         try{
//             await PackageModule.findByIdAndDelete({_id:todoID})
//             res.send({"meg":"one note delete successfully"})
//         }
//         catch(err){
//             console.log(err)
//             res.send("something wrong in deleting the note")
//         }

//     }
    
    
//     res.send("wellcome back")
// })


module.exports={PackageRouter}