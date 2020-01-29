const router = require("express").Router();
const booksController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/login")
  // .get(booksController.findAll)
  .post(booksController.create);

module.exports = router;
