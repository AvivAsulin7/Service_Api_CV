const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, default: null },
  linkedinUrl: { type: String, default: null },
  phone: { type: String, default: null },
  id: { type: String, default: null },
  rawData: { type: String, required: true },
});

mongoose.model("applicant", applicantSchema);
