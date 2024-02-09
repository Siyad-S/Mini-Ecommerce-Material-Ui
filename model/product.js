const mongoose = require("mongoose");
const products = new mongoose.Schema({
    product_name: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number
    },
    description: {
        type: String,
    },
    product_image: {
        type: String,
    },
    product_images: {
        type: [String],
    }

});

const productsCollection = mongoose.model( "product", products );
module.exports = productsCollection;