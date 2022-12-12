const express =require("express")

const {TODOModel}=require("../model/todo.module")

const todoRouter =express.Router()


todoRouter.get("/",async(req,res)=>{
    const userID=req.body.TodoID
    try{
        const notes=await TODOModel.find({TodoID:userID})
        res.send(notes)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})


todoRouter.post("/create",async (req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        // await NoteModel.insertMany(payload)
        const new_note=new TODOModel(payload)
        await new_note.save()
        res.send({"mesg":"Notes create successfully"})
    }

    catch(err)
    {
        console.log(err)
        res.send({"err":"something wrong"})
    }
})

todoRouter.patch("/update/:todoid",async(req,res)=>{
    const userID=req.body.TodoID
    const payload=req.body;
    const todoID=req.params.noteid
    const todo=await TODOModel.findOne({_id:todoID})
    console.log("to",todo.TodoID,"use",userID)

    if(userID!==todo.TodoID){
        res.send("not authorised")

    }
    else{
        
        try{
            await TODOModel.findByIdAndUpdate({_id:todoID},payload)
             res.send("Notes update")
        }
        catch(err){
            console.log(err)

        }

    }
    
})


todoRouter.delete("/delete/:todoid",async (req,res)=>{
    const userID=req.body.TodoID
    // const payload=req.body;
    const todoID=req.params.noteid
    const todo=await TODOModel.findOne({_id:todoID})
    // console.log("not",note.NoteID,"use",userID)

    if(userID!==todo.TodoID){
        res.send("not authorised")

    }
    else{
        try{
            await TODOModel.findByIdAndDelete({_id:todoID})
            res.send({"meg":"one note delete successfully"})
        }
        catch(err){
            console.log(err)
            res.send("something wrong in deleting the note")
        }

    }
    
    
    res.send("wellcome back")
})


module.exports={todoRouter}