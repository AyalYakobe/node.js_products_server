const express = require('express');
const router = express.Router()
const data = require('../../dal')

const products = () => {

   return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="./homePage.css" />
        <script src="./routerFile.js"></script>
    </head>
    
    <body>
    <h1>PRODUCT DETAILS</h1>
       ${data.productsArray.map(
         (product) => {
           return `<div>ID: ${product.id}</div><div>PRODUCT NAME: ${product.name}</div><div>PRICE: ${product.price}</div><div>QUANTITY: ${product.quantity}</div>`
         }
       )}
    </body>
    
    </html>`
}

  router.get('/main', function(req, res) {
   res.send(products());
  });

module.exports = router;