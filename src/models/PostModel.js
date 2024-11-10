const mongoose = require("mongoose");
const { LocalizedContentSchema } = require("./LocalizedContent");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 4,
        trim: true,
    },
    content: [LocalizedContentSchema],
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = {
    PostModel,
};
