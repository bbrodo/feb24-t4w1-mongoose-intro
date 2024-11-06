const { dbConnect, dbDisconnect } = require("../database");
const { createPost } = require("./PostCrud");

async function seed() {
    await createPost("Example title", "Example Content");
    console.log("Seeding completed, disconnecting")
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
});
