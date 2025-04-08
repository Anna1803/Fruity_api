require('dotenv').config(); 
const port = process.env.PORT

const app = require('./app'); // import the app module


app.listen(port, () => { // start the server and listen on the specified port
    console.log(`App is listening on port ${port}`); // log a message to the console when the server starts
})