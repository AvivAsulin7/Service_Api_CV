const multer = require("multer");

const pdfFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "cv/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

module.exports = pdfFile;
