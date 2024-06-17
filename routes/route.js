const express=require("express");
const Note = require("../models/note");
const router = express.Router();

router.get("/notes", async(req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch(err){
        console.log(err);
    }
});

router.post("/notes", async(req, res)=>{
    const note = new Note({
        content: req.body.content,
        name: req.body.name
    });

    try {
        const newNote = await note.save();
        res.json(newNote);
    } catch (err){
        console.log(err)
    }
});

router.get("/Nitin/Kumar/Jha", async(req, res)=>{
    await Note.deleteMany({});
    res.json("Deleted all notes");
})

module.exports=router;