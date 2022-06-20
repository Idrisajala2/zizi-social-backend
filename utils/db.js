const mongoose = require("mongoose");

const url =
  "mongodb+srv://idrisolas:Kendrick12@cluster0.ustoh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("database now connected...!");
});

module.exports = mongoose;
