const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MONGO_CONNECTION_STRING = "mongodb+srv://octopus:Th1QAvEUnPhRG5nB@cluster0.8jdm9.mongodb.net/octopus?retryWrites=true&w=majority";

const db_models = {};
db_models.mongoose = mongoose;
db_models.url = MONGO_CONNECTION_STRING;
db_models.User = require("./User.js");
db_models.Menu = require("./Menu.js");
db_models.Dish = require("./Dish.js");
db_models.Delivery = require("./Delivery.js");
db_models.DeliveryService = require('./DeliveryService.js');

module.exports = db_models;