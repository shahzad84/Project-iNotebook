const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:/inotebook"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;