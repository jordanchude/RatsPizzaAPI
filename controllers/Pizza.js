const Pizza = require("../models/Pizza.js");

//research: seven restful routes

//INDEX - GETS ALL PIZZA
//async keyword allows it to use await keyword
const index = async (req, res) => {
    try {
        const allPizza =  await Pizza.find({}); //grab all pizzas
        res.status(200).json(allPizza); //send back 200 status and send back all pizza as a json object
    }
    catch(error) {
        res.status(400).send(error); //send error to see it on the frontend
    }
}

//CREATE - MAKES NEW PIZZA
const create  = async (req, res) => {
    try {
        const newPizza = await Pizza.create(req.body); //creates new pizza in req body and stores in pizza variable
        res.send(200).json(newPizza); //sends new pizza back as JSON
    } catch(error) {
        res.status(400).send(error); //send error and set status to 400
    }
}

//UPDATE - UPDATES A PIZZA
const update = async (req, res) => {
    try {
        const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true})  //find pizza by ID, which we get in the url id, pass in update through json object to the req body. When you're done, send back the new version of the object
        res.status(200).json(updatedPizza); //send updated pizza back as json
    } catch(error) { //catch block is always the same: what happens when there's an error
        res.status(400).send(error);
    }
}

//DELETE - DELETE A PIZZA
const destroy = async (req, res) => {
    try {
        const deletedPizza = await Pizza.findByIdAndDelete(req.params.id); //passes in ID that deletes pizza and removes it from database
        res.status(200).json(deletedPizza);
    } catch(error) {
        res.status(200).send(error);
    }
};

module.exports = {
    index,
    create,
    update,
    destroy
}