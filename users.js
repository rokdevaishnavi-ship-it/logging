
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    req.log.info({
        requestId: req.requestId
    }, "Fetching all users");

    res.json([
        {
            id:1,
            name:"John"
        },
        {
            id:2,
            name:"Alice"
        }
    ]);

});

router.get("/error", (req,res)=>{

    throw new Error("Database Connection Failed");

});

module.exports = router;