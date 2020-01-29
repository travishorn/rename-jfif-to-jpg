const fs = require("fs");
const path = require("path");
const walk = require("recursive-readdir");

const onlyJfif = file => path.extname(file) === "jfif";

walk("./photos", [onlyJfif], (err, files) => {
  files.forEach(file => {
    fs.renameSync(
      file,
      path.join(path.dirname(file), `${path.basename(file, ".jfif")}.jpg`)
    );
  });
});
