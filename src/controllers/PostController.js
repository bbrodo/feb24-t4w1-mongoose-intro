const express = require("express");

const { PostModel } = require("../models/PostModel");
const { findOnePost, findManyPosts } = require("../utils/crud/PostCrud");

const router = express.Router();

router.get("/all", async (request, response) => {
    let result = await findManyPosts({});

    response.json({
        data: result,
    });
});

router.get("/search/:postId", async (request, response) => {
    let result = await findOnePost({ _id: request.params.postId });

    response.json({
        data: result,
    });
});

router.get("/query", async (request, response) => {
    let query = request.body.query;

    let result = await findOnePost(query);

    response.json({
        data: result,
    });
});

module.exports = router;
