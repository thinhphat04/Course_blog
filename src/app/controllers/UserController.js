const Users = require("../models/User.model");

const { multipleMongooseToObject } = require("../../util/mongoose");

class UserController {
  search(req, res) {
    res.render("users/register");
  }
  login(req, res) {
    res.render("users/login");
  }
}
module.exports = new UserController();
