const mongoose=require("mongoose");

const formModelo1 ={
    title:String,
    content:String
}
const Note= mongoose.model('Note',formModelo1);
module.exports=Note;