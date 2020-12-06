const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true}, // User email (ID)
    password: {type: String, required: true}, // User password
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
});

module.exports = User = mongoose.model('User', UserSchema);