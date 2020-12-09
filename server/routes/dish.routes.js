module.exports = app => {

    var router = require("express").Router();

    const dish = require("../controllers/dish.controller.js");

    // Fetch all menus
    router.get("/", dish.getDishes);

    app.use("/api/dish", router);
    // Full path would be **host**/api/mdish/**one of these routes **
}