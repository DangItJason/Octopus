const models = require("../models");

const Dishes = models.Dish;

exports.getDishes = async (req, res) => {
    var docs = await Dishes.find().exec();

    res.status(200).send(docs);
    return;
}

exports.addDish = async (req, res) => {
    var new_dish = {};

    new_dish["name"] = req.body.dish_name;
    new_dish["price"] = req.body.dish_price;
    new_dish["description"] = req.body.dish_description;
    new_dish["times_sold"] = 0;
    new_dish["isAvailable"] = true;

    var docs = await Dishes.create(new_dish, function (err, result) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}

exports.deleteDish = async (req, res) => {

    var dish_name = req.body.name;

    var docs = await Dishes.deleteOne({ name: dish_name }, function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}
