

const express = require("express")

const app = express();

app.get("/", (request, response) => {
    response.send("Hello world");
    
})


module.exports = {
    app
}