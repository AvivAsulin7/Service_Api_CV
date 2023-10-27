const express = require("express");
const controllers = require("../controllers/applicantsControllers");
const pdfFile = require("../middleware/fileUpload");

const applicantRoutes = express.Router();

applicantRoutes.get("/", controllers.getApplicants);
applicantRoutes.post("/", controllers.createApplicant);
applicantRoutes.delete("/:id", controllers.deleteApplicants);

module.exports = applicantRoutes;
