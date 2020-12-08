module.exports = app => {

    var router = require("express").Router();

    const menu = require("../controllers/menu.controller.js");

    // Fetch all menus
    router.get("/", menu.getMenus);

    app.use("/api/menu", router);
    // Full path would be **host**/api/menu/**one of these routes **
}