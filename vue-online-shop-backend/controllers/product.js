const Model = require('../model');
// const { update } = require('./menufacturer');

const { Product } = Model;

const productController = {
    all(req, res) {
        Product.find({})
            .populate('menufacturer')
            .exec((err, products) => res.json(products))
    },
    byId(req, res) {},
    create(req, res) {},
    update(req, res) {},
    remove(req, res) {}
}

module.exports = productController; 