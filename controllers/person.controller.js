const axios = require('axios');//ApiCall için axios kütüphanesini ekledim

const db = require("../models");
const Person = db.person;
const Op = db.Sequelize.Op;

//Person Listeleme SequalizeORM
exports.getAll = (req, res) => {  
  Person.findAll().then(data => {
    console.log(data);
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

//Person Oluşturma SequalizeORM
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name Boş Bırakılamaz!"
    });
    return;
  }
  const URI = 'https://api.agify.io/?name=' + req.body.name;
  const encodedURI = encodeURI(URI);
  axios.get(encodedURI)
    .then(response => {
      const person = {
        name: req.body.name,
        age: response.data.age,
        count: response.data.count,
        createdAt: created = new Date()
      };
      Person.create(person)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
    })
    .catch(error => {
      console.log(error);
    });

};

