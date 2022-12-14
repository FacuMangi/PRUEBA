const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('User', userSchema);