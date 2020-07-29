const express = require('express');
const PizzaRouter = express.Router();
const {index, create, update, destroy} = require("../controllers/Pizza.js");

//ROUTES
//INDEX - GET ALL PIZZAS
PizzaRouter.get("/", index);

//CREATE - CREATE A NEW PIZZA
PizzaRouter.post("/", create);

//UPDATE - UPDATE A PIZZA
PizzaRouter.put('/:id', update);

//DESTROY - DESTROY A PIZZA
PizzaRouter.delete('/:id', destroy);

module.exports = PizzaRouter;