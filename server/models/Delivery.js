const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DishSchema = require("./Dish").Dish;

const CustomerSchema = new Schema({
    name: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String}
});

const DeliverySchema = new Schema({
    customer: {type: CustomerSchema, required: true},
    order: {type: [DishSchema], required: true},
    totalPrice: {type: Number, required: true},
    whenPlaced:  {type: Date, required: true},
    serviceType: {type: String, required: true}
});

module.exports = Delivery = mongoose.model('Delivery', DeliverySchema);
