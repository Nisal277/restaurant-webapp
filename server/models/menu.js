const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuItemSchema = new Schema({
    name:{
        type: String,
        required : true
    },

    description:{
        type: String,
        required: true

    },

    price:{
        type: Number,
        required: true
    },

    imageUrl:{
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    }


})

const member = mongoose.model("MenuItem" , MenuItemSchema);

module.exports = MenuItem;


