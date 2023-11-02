const mongoose = require("mongoose");
const Applicant = mongoose.model("applicant");
const extractDataFromCv = require("../utils/extractDataFromCv");

const getApplicants = async (req, res, next) => {
  let applicants;
  try {
    applicants = await Applicant.find();
  } catch (error) {
    console.log(`Error by fetching data: ${error}`);
    return next({
      message: "Cannot fetch the applicants, please try again.",
      status: 500,
    });
  }
  res.json({
    data: applicants.map((applicant) => applicant.toObject({ getters: true })),
  });
};

const createApplicant = async (req, res, next) => {
  let existApplicant, data;
  try {
    data = await extractDataFromCv(req.file);

    existApplicant = await Applicant.find({
      firstName: data.firstName,
      lastName: data.lastName,
      id: data.id,
      rawData: data.rawData,
    });

    if (existApplicant.length > 0) {
      return next({
        message: "This applicant already exist.",
        status: 500,
      });
    }
  } catch (error) {
    return next({
      status: 500,
    });
  }

  const createdApplicant = new Applicant(data);

  try {
    await createdApplicant.save();
  } catch (error) {
    console.log(`Cannot create new applicant, please try again.: ${error}`);
    return next({
      message: "Cannot create new applicant, please try again.",
      status: 500,
    });
  }

  res.json({
    message: "Applicant added to db successfully!",
    data: createdApplicant,
  });
};

const deleteApplicants = async (req, res, next) => {
  const { id } = req.params;
  let applicant;
  try {
    applicant = await Applicant.findByIdAndDelete(id);
    console.log(applicant);
  } catch (error) {
    console.log(`Error by deleting applicant: ${error}`);
    return next({
      message: "Error by deleting applicant.",
      status: 500,
    });
  }

  if (!applicant) {
    return next({
      message: "Could not find applicant for this id",
      status: 500,
    });
  }

  res.json({
    message: `The applicant ${
      applicant.firstName + " " + applicant.lastName
    } deleted successfully!`,
    data: applicant,
  });
};

const controllers = {
  getApplicants,
  createApplicant,
  deleteApplicants,
};

module.exports = controllers;
