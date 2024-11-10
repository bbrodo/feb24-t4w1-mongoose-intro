const { UserModel } = require("../../models/UserModel");

async function createUser(username, isOver18, email) {
    let result = await UserModel.create({
        username: username,
        isOver18: isOver18,
        email: email
    });

    return result;
}

async function findOneUser(query) {
    let result = await UserModel.findOne(query);

    return result;
}

async function findManyUsers(query) {
    let result = await UserModel.find(query);

    return result;
}

async function updateOneUser() {}

async function updateManyUsers() {}

async function deleteOneUser() {}

async function deleteManyUsers() {}

module.exports = {
    createUser,
    findOneUser,
    findManyUsers,
    updateOneUser,
    updateManyUsers,
    deleteOneUser,
    deleteManyUsers,
};
