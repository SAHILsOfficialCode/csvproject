
const mongoose = require("mongoose");

// mongoose.connect
const DB = 'mongodb+srv://Sahil:GCP8q1we3kHGAA2F@cluster0.dkuhk1p.mongodb.net/Database?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting up db
const db = mongoose.connection;


//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;

