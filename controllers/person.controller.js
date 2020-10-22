const axios = require('axios');//ApiCall için axios kütüphanesini ekledim
const { response } = require('express');

const db = require("../models");
const personAddressModel = require('../models/personAddress.model');
const Person = db.person;
const PersonAddress = db.personAddress;
const Op = db.Sequelize.Op;

//Person Listeleme SequalizeORM
exports.getAll = (req, res) => {
  Person.findAll({
    include: [{
      model: db.personAddress,
      as: 'personAddresses'
    }]
  }).then(data => {
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
  const URI = 'https://api.agify.io/?name=' + req.body.name;
  const encodedURI = encodeURI(URI);

  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name Boş Bırakılamaz!"
    });
    return;
  }
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
              err.message || ""
          });
        });
    })
    .catch(error => {
      console.log(error);
    });
};

//PersonVeAdress Oluşturma SequalizeORM
exports.createPersonAndAddress = (req, res) => {
  const URI = 'https://api.agify.io/?name=' + req.body.name;
  const encodedURI = encodeURI(URI);
  console.log("ReqUrl", URI);
  axios.get(encodedURI)
    .then(response => {
      const person = {
        name: req.body.name,
        age: response.data.age,
        count: response.data.count,
        createdAt: created = new Date()
      }
      Person.create(person)
        .then(dataPerson => {
          console.log("DbData", dataPerson.id);
          const personAddress = {
            personId: dataPerson.id,
            cityName: req.body.cityName,
            countryName: req.body.countryName,
            createdAt: created = new Date()
          }
          PersonAddress.create(personAddress).
            then(data => {
              res.send(dataPerson);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || ""
              });
            });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || ""
          });
        });
    })
    .catch(error => {
      console.log(error);
    });
};