const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        unique: true
    },
    isOver18: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        unique: true,
        match: /.+\@.+\..+/
    }
    
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
    UserModel,
};
