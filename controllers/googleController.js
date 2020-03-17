const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("google controller find all");
    console.log(req.params);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", { query: req.params })
      .then(results => {
        console.log(results);
        res.json(results);
      })
      .catch(err => res.json(err));
  }
};
