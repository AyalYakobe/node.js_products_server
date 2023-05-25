const express = require('express');
const router = express.Router();
const data = require('../../dal');

router.get('/api/products', function(req, res) {
    res.send(data.productsArray);
});
router.get('/api/orders', function(req, res) {
    res.send(data.ordersArray);
});
router.get('/api/purchase-products', function(req, res) {
    let id = req.query.id;

    if(id){
        let product = data.productsArray.find(
            (prod) => {
                if(prod.id == id) return true;
                else return false;           
            });
        if(product && product.quantity > 0) {
            let order = {id: data.ordersArray.length + 1, product: product.name, quantity: 1 };
            data.ordersArray.push(order);
            product.quantity -= 1;
            res.send(order);
        }
        else {
            res.send("Product unavailable");
        }
    } else {
            res.send("You're very dumb");
    }
});

module.exports = router;