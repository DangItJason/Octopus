module.exports = app => {

    var router = require("express").Router();

    const menu = require("../controllers/deliveryservice.controller.js");

    // Fetch all menus
    router.get("/", dish.getDeliveryServices);

    app.use("/api/delivery-service", router);
    // Full path would be **host**/api/mdish/**one of these routes **
}