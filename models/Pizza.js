const mongoose = require('mongoose');
const {Schema, model} = mongoose;


//schema for new pizza
//includes timestamps for when they're created
const PizzaSchema = new Schema ({
    name: String,
    toppings: [String],
}, {timestamps: true});

//creates a collection that uses the pizza schema
const Pizza = model('pizza', PizzaSchema);
module.exports = Pizza;