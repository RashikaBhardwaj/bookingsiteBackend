import mongoose from "mongoose";

mongoose.connect('mongodb://bhardwajrashika954:hzwrEMdHArNJjW5R@ac-bm57d1z-shard-00-00.f9fte1t.mongodb.net:27017,ac-bm57d1z-shard-00-01.f9fte1t.mongodb.net:27017,ac-bm57d1z-shard-00-02.f9fte1t.mongodb.net:27017/mydatabase?ssl=true&replicaSet=atlas-s7cbqj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');


const con = mongoose.connection;

con.on('open', () => {
    console.log("connection success");
})

const formSchema = new mongoose.Schema({
    hotelname: String,
    hotelphone: String,
    hotelemail: String,
    hotellocation: String,
    hotelrent: String,
    hotelimage:String
})

const Form = mongoose.model('Form',formSchema)

export {Form}