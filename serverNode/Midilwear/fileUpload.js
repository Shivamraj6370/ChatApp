import multer from "multer";

var Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "_" + Date.now() + "." + ext);
    console.log(file.mimetype);
  },
});
export const upload = multer({ storage: Storage });
