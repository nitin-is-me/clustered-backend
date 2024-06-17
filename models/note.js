const mongoose = require("mongoose");

const noteSchema=mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    }
});

const Note=mongoose.model("Note", noteSchema);
module.exports=Note;