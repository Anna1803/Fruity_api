const Fruit = require('../models/Fruit'); // import the Fruit model



const index = async (req, res) => { // define a route 'home' for the root URL, we expect a GET request
    //res.send('Return all the fruits!'); // send a response to the client
    try {
        const fruits = await Fruit.showAll(); 
        res.status(200).send(fruits); // send a response to the client with status code 200 => no error
    }
    catch (err) {
        res.status(500).send({error: 'Error retrieving fruits'}); 
    }
}

const show = async (req, res) => { // define a route 'chickens/:name' for the URL with a parameter :name
    const name = req.params.name.toLowerCase(); // destructure the parameters from the request object
    
    try {
        const fruit = Fruit.show(name); 
        res.status(200).send(fruit); 

    } catch (err) {
        res.status(404).send({error: err}); 
    }
}

const create = async (req, res) => {
    try {
        const newFruit = await Fruit.create(req.body); 
        res.status(201).send(newFruit); 
    } catch (err) {
        res.status(409).send({error: err}); 
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase(); 

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)

        res.status(200).send(result);

    } catch (err) {
        res.status(404).send({error: err}); 

    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase(); 

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()

        res.sendStatus(204)
} catch (err) {
        res.status(404).send({error: err}); 
    }
}

module.exports = {
    index, 
    show,
    create,
    update,
    destroy
}