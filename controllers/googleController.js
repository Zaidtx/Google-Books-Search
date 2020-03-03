const axios = require("axios");
const db = require("../models")

module.exports  = {
    findAll: function(req, res){
        axios.get("https://www.googleapis.com/books/v1/volumes", {query: req.params})
        .then(results => {
           console.log(results)
        })
    }
}