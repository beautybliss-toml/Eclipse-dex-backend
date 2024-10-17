const passport = require("passport");
const validate = require("../services/validate.service.js");
const passport_service = require("../services/passport.service.js");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  //poolinfo controller
  const poolController = require("../controller/pool.controller.js");
  var router1 = require("express").Router();
  router1.get("/getPoolInfo", poolController.getPoolInfo);
  router1.post("/savePoolInfo", poolController.savePoolInfo);
  router1.get("/getOnePoolInfo", poolController.getOnePoolInfo);

  app.use("/epsapi/", router1);

  //poolprice controller
  const poolPriceController = require("../controller/poolPrice.controller.js");
  var router2 = require("express").Router();
  poolPriceController.getPoolPriceFromContract()

  router1.get("/getPoolPrice", poolPriceController.getPoolPrice);

  app.use("/epsapi/", router2);
};