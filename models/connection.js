
/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

require("dotenv").config();
const mongoose = require("mongoose");

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function


const DATABASE_URL = process.env.DATABASE_URL; //just give it a variable name for using .env
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };///this will remove warning that comes up just warnings

  // Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);


// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

  ////////////////////////////////////////////////////
// Export the Connection
////////////////////////////////////////////////////

module.exports = mongoose;