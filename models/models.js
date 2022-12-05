const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
   
    user_id: {
        type: Number,
        required: true,
        },
    id: {
        type: String,
        required: true,
        },
    title: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
        }
    
});
const Place = mongoose.model('placec', placeSchema);
module.exports = Place;