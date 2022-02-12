const express = require("express")
const signUpRouter = new express.Router()
const signUpController = require("../controller/signupcontroller")
signUpRouter.get("/signup",signUpController)


module.exports = signUpRouter