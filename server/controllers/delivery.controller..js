const models = require("../models");

const Deliveries = models.Delivery;

exports.getDeliveries = async (req, res) => {

    var docs = await Deliveries.find().exec();

    res.status(200).send(docs);
    return;
}

exports.addDeliveries = async (req, res) => {
    var new_delivery = {};

    new_delivery["customer"] =  req.body.customer;
    new_delivery["order"] =  req.body.order;
    new_delivery["totalPrice"] =  req.body.price;
    new_delivery["whenPlaced"] =  req.body.when_order_placed;
    new_delivery["serviceType"] =  req.body.service_type;

    var docs = await Deliveries.create(new_delivery, function (err, result) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}

exports.deleteDelivery = async (req, res) => {
    var delivery_id = req.body.id;

    var docs = await Deliveries.deleteOne({ delivery_id: delivery_id }, function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}
