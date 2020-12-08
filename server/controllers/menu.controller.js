const models = require("../models");

const Menus = models.Menu;
const Dishes = models.Dish;

exports.getMenus = async (req, res) => {

    var docs = await Menus.find().exec();

    res.status(200).send(docs);
    return;
}

exports.addMenus = async (req, res) => {
    var new_menu = {};

    new_menu["name"] = req.body.menu_name;
    new_menu["description"] = req.body.menu_description;
    new_menu["meals"] = [];

    var docs = await Menus.create(new_menu, function (err, result) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}

exports.deleteMenu = async (req, res) => {
    var menu_name = req.body.name;

    var docs = await Menus.deleteOne({ name: menu_name }, function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}
