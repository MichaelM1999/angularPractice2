const router = require("express").Router();
const userRoutes = require("./user.js");

router.use("/user", userRoutes);

module.exports = router;