module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	router.use("/auth",require("./authRoutes.js")(passport));
	router.use("/api",require("./apiRoutes.js")(passport));
	//add more routes here


	return router;
};