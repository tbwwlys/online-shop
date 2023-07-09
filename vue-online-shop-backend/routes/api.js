var express = require('express');
var router = express.Router();

// manufacturer 企业级控制器
var menufacturerController = require('../controllers/menufacturer');
var productController = require('../controllers/product');
// restful 资源暴露的方式
// - mvc 的分离
/* GET home page. */

router.get('/menufacturers', menufacturerController.all);
router.get('/menufacturers/:id', menufacturerController.byId);
router.post('/menufacturers', menufacturerController.create);
router.put('/menufacturers/:id', menufacturerController.update);
router.delete('/menufacturers/:id', menufacturerController.remove);

router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);


module.exports = router;