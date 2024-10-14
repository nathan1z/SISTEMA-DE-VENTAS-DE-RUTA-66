const express= require("express");
const app= express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://Grupo2:rlRlqwvolcUBzS5h@cluster0.7em3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
app.use("/",require("./noteRoute"));
app.listen(3001, function()
{
    console.log('express is running in port 3001');
})