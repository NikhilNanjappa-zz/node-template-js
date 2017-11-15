const router = require("express").Router();
const base_controller = require("../controllers/baseController");

router.get("/time", (req, res) => {
  base_controller.currentTime(req, res);
})

router.get("/month", (req, res) => {
  base_controller.currentMonth(req, res);
})

router.get("/year", (req, res) => {
  base_controller.currentYear(req, res);
})

module.exports = router