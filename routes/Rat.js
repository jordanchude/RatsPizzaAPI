const express = require("express");
const RatRouter = express.Router();
const {index, create, update, destroy} = require("../controllers/Rat.js");

//routes and middleware
RatRouter.get("/", index);
RatRouter.post("/", create);
RatRouter.put("/:id", update);
RatRouter.delete("/:id", destroy);

//export
module.exports = RatRouter;