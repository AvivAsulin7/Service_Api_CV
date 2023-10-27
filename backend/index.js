const express = require("express");
require("./db/db.connection");
require("./models/Applicant");
const applicantRoutes = require("./routes/applicantsRoutes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/", applicantRoutes);

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
