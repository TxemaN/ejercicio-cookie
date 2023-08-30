const express = require("express");
const router = express.Router();

const {pantallaBoton, login} = require("../controller/logController")

router.get("/", pantallaBoton)

router.post("/cookeado", login)






module.exports = router