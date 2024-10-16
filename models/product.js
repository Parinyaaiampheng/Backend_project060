const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_type: { type: String, required: true },
},
    { timestamps: true, versionKey: false }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;