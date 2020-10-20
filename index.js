const express = require("express");
const app = express();
const db = require("./models");
const person = require("./routes/person.routes");


//Post datasını parse etme
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PersonRoute İşlemi
app.use("/person", person);

// call db initializer
db.sequelize.sync();

//Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`localhost:${port} -> Api Çalışıyor ! `);
}); 