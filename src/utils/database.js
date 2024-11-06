const mongoose = require("mongoose");
const { PostModel } = require("../models/PostModel");

async function dbConnect() {
    let databaseUrl =
        process.env.DATABASE_URL ||
        `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;

    await mongoose.connect(databaseUrl);
}

async function dbDisconnect() {
    await mongoose.connection.close();
}

async function dbDrop() {
    await mongoose.connection.db.dropDatabase();
}

module.exports = {
    dbConnect,
    dbDisconnect,
    dbDrop,
};
