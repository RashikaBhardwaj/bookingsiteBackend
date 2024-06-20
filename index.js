import express from "express"
import cors from"cors"
import bodyParser from "body-parser"

const app =express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

app.get("/",async(req,res)=>{
    try{
        res.json({data:"rajat"})
    }
    catch(err){
        console.log(err);
    }
})

app.post("/signup",async(req,res)=>{
    try{
        console.log(req.body);
        res.json({data:"hello rajat"})
    }
    catch(err){
        console.log(err);

    }
})
app.post("/signin",async(req,res)=>{
    try{
        console.log(req.body);
        res.json({data:"hello rajat singh"})
    }
    catch(err){
        console.log(err);

    }
})
app.listen(8000)