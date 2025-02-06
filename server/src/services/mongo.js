const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:qTYk3xaikLOifD4E@nasacluster.rotii.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log("Awaited the mongoose connect");
}

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});
module.exports = { mongoConnect };
