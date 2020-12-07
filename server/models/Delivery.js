const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DishSchema = require("./Dish").Dish;

const DeliverySchema = new Schema({
    buyerName: {type: String, required: true},
    order: {type: [DishSchema], required: true},
    totalPrice: {type: Number, required: true},
    whenPlaced:  {type: Date, required: true}
});

module.exports = Delivery = mongoose.model('Delivery', DeliverySchema);
