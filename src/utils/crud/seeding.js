const { dbConnect, dbDisconnect } = require("../database");
const { createPost } = require("./PostCrud");
const { createUser } = require("./UserCrud");

async function seed() {
    let newUser = await createUser("brodey", true, "brodey880@gmail.com");
    await createPost(
        "Example title",
        [{ languageCode: "en", content: "example content" },
            {languageCode: "fr", content: "omelete baugette"}
        ],
        newUser.id
    );
    console.log("Seeding completed, disconnecting");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
});
