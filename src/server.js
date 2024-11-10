const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Hello world");
});

const PostController = require("./controllers/PostController.js");
app.use("/posts", PostController);

module.exports = {
    app,
};
