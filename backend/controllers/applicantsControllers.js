const mongoose = require("mongoose");
const Applicant = mongoose.model("applicant");

const getApplicants = async (req, res, next) => {
  let applicants;
  try {
    applicants = await Applicant.find();
  } catch (error) {
    console.log(`Error by fetching data: ${error}`);
    res.status(403).send("ERROR");
  }
  res.json({
    data: applicants.map((applicant) => applicant.toObject({ getters: true })),
  });
};

const createApplicant = async (req, res, next) => {
  const body = req.body;
  const createdApplicant = new Applicant(body);
  console.log(createdApplicant);
  try {
    await createdApplicant.save();
  } catch (error) {
    console.log(`Error by creating new Applicant: ${error}`);
    res.status(403).send("ERROR");
  }
  res.json({ message: "Applicant added to db successfully!" });
};

const deleteApplicants = async (req, res, next) => {
  const { id } = req.params;
  let applicant;
  try {
    applicant = await Applicant.findByIdAndDelete(id);
    console.log(applicant);
  } catch (error) {
    console.log(`Error by deleting specific applicant: ${error}`);
    res.status(403).send("ERROR");
  }

  if (!applicant) {
    return next(new Error("Could not find applicant for this id", 500));
  }

  res.json({
    message: `The applicant ${
      applicant.firstName + " " + applicant.lastName
    } deleted successfully!`,
  });
};

const controllers = {
  getApplicants,
  createApplicant,
  deleteApplicants,
};

module.exports = controllers;
