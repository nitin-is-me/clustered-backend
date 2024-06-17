const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const router = require("./routes/route");

const app=express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router );

mongoose.connect("mongodb+srv://nitinjha2609:notesmanager@cluster0.fetyubc.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.log(err));

module.exports=app