const userController = require("../../controllers/userController");
const stockController = require("../../controllers/sharesController")
const router = require("express").Router();

// Matches with "/api/user"
router.route("/")
  .post(userController.create);


router.route("/login")
  .post(userController.findOne)

router.route("/stock")
  .post(stockController.create)

router.route("/search")
  .post(stockController.find)

router.route("/delete")
  .post(stockController.delete)

module.exports = router;