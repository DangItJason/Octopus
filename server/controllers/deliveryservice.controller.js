const models = require("../models");

const DeliveryServices = models.DeliveryService;

exports.getDeliveryServices = async (req, res) => {

    var docs = await DeliveryServices.find().exec();

    res.status(200).send(docs);
    return;
}

exports.addDeliveryServices = async (req, res) => {
    var new_delivery_service = {};

    new_delivery_service["name"] =  req.body.name;
    new_delivery_service["username"] =  req.body.username;
    new_delivery_service["password"] =  req.body.password;
    new_delivery_service["apiKey"] =  req.body.apiKey;
    new_delivery_service["timesUsed"] =  req.body.timesUsed;

    var docs = await DeliveryServices.create(new_delivery_service, function (err, result) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}

exports.deleteDeliveryServices = async (req, res) => {
    var delivery_service_name = req.body.name;

    var docs = await DeliveryServices.deleteOne({ name: delivery_service_name }, function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
    });

    res.status(200).send(docs);
    return;
}
