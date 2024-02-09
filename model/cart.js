const mongoose = require("mongoose");
const cartModel = mongoose.Schema({
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

const cartCollection = new mongoose.model("cart", cartModel);
module.exports = cartCollection;