const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router
  .route("/")
  .get(googleController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
