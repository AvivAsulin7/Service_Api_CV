const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, default: null },
  linkedinUrl: { type: String, required: true, default: null },
  phone: { type: String, required: true, default: null },
  id: { type: String, required: true, default: null },
  rawData: { type: String, required: true },
});

mongoose.model("applicant", applicantSchema);
