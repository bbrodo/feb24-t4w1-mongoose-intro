const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 4,
        trim: true,
    },
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = {
    PostModel,
};
