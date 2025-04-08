const fruits = require (`../fruits.json`); 

// const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name); // find the fruit with the same name as the parameter
    
// if (fruit == undefined) {
//     res.status(404).send(`Fruit with name ${name} not found`); 
// } else {
//     res.status(200).send(fruit); // send the fruit object as a response with status code 200
// }

// Rupesh solution
// class Fruit {

//     static showAll() { // static method to show all fruits
//         if(!fruits){
//             throw new Error('No fruits found'); // throw an error if no fruits are found
//         }

//         return fruits; // return the fruits array
//     }

//     static show(name) { // static method to show a fruit by name
//         const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name); // find the fruit with the same name as the parameter
        
//         if (fruit == undefined) {
//             throw new Error(`Fruit with name ${name} not found`); // throw an error if no fruit is found
//         } else {
//             return fruit; // return the fruit object
//         }
//     }
// }


//Monia's solution
class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus
        this.name = fruit.name
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }

    static showAll() {
        return fruits.map(f => new Fruit(f)); // return an array of Fruit objects
    }

    static show(name) {

        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name); 

        if (fruit) {
            return new Fruit(fruit); // return a new Fruit object if found
        } else {
            throw 'The fruit you are looking for does not exist'; 
        }
    }

    static create(data) {
        const newFruit = data
        console.log(newFruit);

        newFruit['id'] = fruits.length + 1; // add an id to the new fruit object

        fruits.push(newFruit); // add the new fruit object to the fruits array

        return new Fruit(newFruit); 
    }

    update(data) {
        const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase()); 

        if (updateFruit) {
            updateFruit.name = data.name
            updateFruit.family = data.family

            return new Fruit(updateFruit); 
        } else {
            throw 'The fruit you are looking for does not exist'; 
        }
    }

    destroy() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());

        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit); 

            fruits.splice(index, 1); // remove the fruit from the array
        } else {
            throw 'The fruit you are looking for does not exist'; 
        }
    }
}

module.exports = Fruit; // export the Fruit class so it can be used in other files
