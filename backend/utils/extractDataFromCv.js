const fs = require("fs");
const PdfParse = require("pdf-parse");

const extractDataFromCv = async (file) => {
  const pdfFile = fs.readFileSync(file.path);
  const { text } = await PdfParse(pdfFile);

  const extractField = (regex, index = 0) => {
    const match = text.match(regex);
    if (match) {
      console.log(match);
    }
    return match ? match[index] : null;
  };

  const fullNameRegex = /[A-Z][a-z]+ [A-Z][a-z]+/g;
  const idRegex = /\b\d{9}\b/;
  const phoneRegex = /\b\d{10}\b/;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const linkedinRegex =
    /https?:\/\/www\.linkedin\.com\/[a-zA-Z0-9_-]+\/?[a-zA-Z0-9_-]*\/?/;

  const firstNameRegex = /First Name: (.+)/i;
  const lastNameRegex = /Last Name: (.+)/i;

  const fullName = extractField(fullNameRegex);
  const id = extractField(idRegex);
  const linkedinUrl = extractField(linkedinRegex);
  const email = extractField(emailRegex);
  const phone = extractField(phoneRegex);
  let firstName = extractField(firstNameRegex, 1);
  let lastName = extractField(lastNameRegex, 1);

  const rawData = file.originalname;

  if (!firstName && !lastName) {
    firstName = fullName.split(" ")[0];
    lastName = fullName.split(" ")[1];
  }
  const data = { firstName, lastName, id, linkedinUrl, email, phone, rawData };

  return data;
};

module.exports = extractDataFromCv;
