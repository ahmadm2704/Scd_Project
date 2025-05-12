const mongoose = require('mongoose');
// Use 'mongo' as the host since that's the name of the MongoDB container
const mongoURI = "mongodb://mongo:27017/IMS";  // 'mongo' is the container name

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
module.exports = connectToMongo;

