const multer = require("multer");

const pdfFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "cv-files/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

module.exports = pdfFile;
