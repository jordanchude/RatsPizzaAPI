//Bring in rat and pizza models
const Rat = require("../models/Rat.js");
const Pizza = require("../models/Pizza.js");

//INDEX - GET ALL RATS WITH PIZZA
const index = async (req, res) => {
    try {
        //get array rats with pizza ids
        const allRats = await Rat.find({});
        
        //Map Rats array to include their Pizza details
        //Go through an array and run a function on each item and return new array
        const rats = allRats.map(async (rat) => {
            const thePizza = await Pizza.findById(rat.pizza);
            return {
                _id: rat._id,
                name: rat.name,
                pizza: thePizza
            }
        });
        //take rats we made and don't do anything until all promises are resolved and then assigns final result to rats2
        const rats2 = await Promise.all(rats);

        //send status and new json for rats2
        res.status(200).json(rats2);

    } catch(error) {
        res.status(400).send(error);
    }
}

//CREATE - CREATE NEW RAT
const create = async (req, res) => {
    try {
        const newRat = await Rat.create(req.body);
        res.status(200).json(newRat);
    } catch(error) {
        res.status(400).send(error);
    }
}

const update = async (req, res) => {
    try {
        const updatedRat = await Rat.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedRat);
    } catch(error) {
        res.status(400).send(error);
    }
}

const destroy = async (req, res) => {
    try {
        const deletedRat = await Rat.findByIdAndDelete(req.params.id);
        res.json(deletedRat);
    } catch(error) {
        res.status(400).send(error);
    }
}

module.exports = {
    index,
    create,
    update,
    destroy
}