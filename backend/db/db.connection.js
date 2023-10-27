require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const mongoUri = `${process.env.MONGO_URI}/Ngsoft`;

mongoose.connect(mongoUri, {
  useNewUrlPArser: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("error", (error) => {
  console.log("Error connecting to mongo", error);
});
