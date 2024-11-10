const express = require("express");

const { PostModel } = require("../models/PostModel");
const { findOnePost } = require("../utils/crud/PostCrud");

const router = express.Router();

router.get("/:postId", async (request, response) => {
    let result = await findOnePost({ _id: request.params.postId });

    response.json({
        data: result,
    });
});


module.exports = router