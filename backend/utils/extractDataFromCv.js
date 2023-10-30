const fs = require("fs");
const PdfParse = require("pdf-parse");
const fsPromises = require("fs.promises");

const extractDataFromCv = async (file) => {
  const pdfFile = fs.readFileSync(file.path);
  const { text } = await PdfParse(pdfFile);

  const extractField = (regex) => {
    const match = text.match(regex);
    return match ? match[1].trim() : null;
  };

  const firstNameRegex = /First Name: (.+)/i;
  const lastNameRegex = /Last Name: (.+)/i;
  const idRegex = /ID: (\d+)/i;
  const linkedinRegex = /LinkedIn: (.+)/i;
  const emailRegex = /Email: (.+)/i;
  const phoneRegex = /Phone: (.+)/i;

  const firstName = extractField(firstNameRegex);
  const lastName = extractField(lastNameRegex);
  const id = extractField(idRegex);
  const linkedinUrl = extractField(linkedinRegex);
  const email = extractField(emailRegex);
  const phone = extractField(phoneRegex);

  const rawData = file.originalname;

  const data = { firstName, lastName, id, linkedinUrl, email, phone, rawData };

  return data;
};

module.exports = extractDataFromCv;
