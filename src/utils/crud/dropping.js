const { dbConnect, dbDisconnect, dbDrop } = require("../database");
const { createPost } = require("./PostCrud");

async function drop () {
    await dbDrop()
    console.log("dropping completed, disconnecting")
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, dropping now!");
    drop();
});
