const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DishSchema = require("./Dish").Dish;

const MenuSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    meals: { type: [DishSchema], required: true }
});

module.exports = Menu = mongoose.model('Menu', MenuSchema);
