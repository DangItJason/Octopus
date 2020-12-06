const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    apiKey: { type: String, required: true },
    timesUsed: { type: Number, required: true }
});

module.exports = Delivery = mongoose.model('Delivery', DeliverySchema);
