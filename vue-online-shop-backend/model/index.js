const mongoose = require('mongoose');
const Schema = mongoose.Schema; // 建模
const model = mongoose.model.bind(mongoose)
const ObjectId = mongoose.Schema.Types.ObjectId;

const menufacturerSchema = Schema({
    id: ObjectId,
    name: String
})
const productSchema = Schema({
    id: ObjectId,
    name: String,
    image: String,
    price: Number,
    description: String,
    menufacturer: { type: ObjectId, ref: 'Menufacturer'}
})
const Menufacturer = model('Menufacturer', menufacturerSchema);
const Product = model('Product', productSchema);
module.exports = {
    Menufacturer,
    Product
}