const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
    idRecurso: {
        type: Number,
        required: true
    },
    mensaje: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Resource', resourceSchema);