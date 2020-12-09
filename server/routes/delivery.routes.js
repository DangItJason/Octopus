module.exports = app => {

    var router = require("express").Router();

    const menu = require("../controllers/delivery.controller.js");

    // Fetch all menus
    router.get("/", dish.getDeliveries);

    app.use("/api/delivery", router);
    // Full path would be **host**/api/mdish/**one of these routes **
}