const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

const { 
        createSeller, 
        getSellerBySellerId, 
        getSellers, 
        patchSellerBySellerId
    } = require('./controllers/controler.seller')
const { 
        createProductBySellerId, 
        getProductByProductId, 
        getProductsBySellerId, 
        getProducts,
        patchProductByProductId,
        deleteProductByProductId
    } = require('./controllers/controller.product')

app.post('/post/seller', createSeller)
app.get('/seller/:id', getSellerBySellerId)
app.get('/sellers', getSellers)
app.patch('/patch/seller/:id', patchSellerBySellerId)

app.post('/post/product/:sellerId', createProductBySellerId)
app.get('/product/:id', getProductByProductId)
app.get('/product/seller/:sellerId', getProductsBySellerId)
app.get('/products', getProducts)
app.patch('/patch/product/:id/:sellerId', patchProductByProductId)
app.delete('/delete/product/:id', deleteProductByProductId)

app.listen(PORT, ()=> {
    console.log(`app listening port number at ${PORT}`)
})