const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description:  {type: String, required: true},
    timesSold: {type: Number, required: true},
    isAvailable: {type: Boolean, required: true}
});

module.exports = Dish = mongoose.model('Dish', DishSchema);
