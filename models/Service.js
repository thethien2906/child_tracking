const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: float, required: true },
    duration: { type: Number, required: true },
    plan_code: { type: String, required: false },

});

module.exports = mongoose.model("Service", serviceSchema);