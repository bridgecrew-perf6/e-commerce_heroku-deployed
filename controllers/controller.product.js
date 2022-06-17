const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// // // CREATE PRODUCT!
const createProductBySellerId = async(req, res) => {
    const sellerId = parseInt(req.params.sellerId);
    try {
        const result = await prisma.product.create({
            data: {...req.body, sellerId },
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};


// // // GET PRODUCT WITH PRODUCT ID!
const getProductByProductId = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        result = await prisma.product.findUnique({
            where: { id },
            include: { seller: true },
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};


// // // GET PRODUCT WITH SELLER ID!
const getProductsBySellerId = async(req, res) => {
    const sellerId = parseInt(req.params.sellerId);
    try {
        result = await prisma.product.findMany({
            where: { sellerId },
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};



// // // GET PRODUCT WITH SELLER ID!
const getProducts = async(req, res) => {
    // const { limit = 3, offset = 2 } = req.query;
    try {
        result = await prisma.product.findMany({
            include: { seller: true },
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};



const patchProductByProductId = async(req, res) => {
    const id = parseInt(req.params.id);
    const sellerId = parseInt(req.params.sellerId);
    try {
        const result = await prisma.product.updateMany({
            where: { id, sellerId },
            data: req.body
        })
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
}


const deleteProductByProductId = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await prisma.product.delete({
            where: { id }
        })
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
};




module.exports = {
    createProductBySellerId,
    getProductByProductId,
    getProductsBySellerId,
    getProducts,
    patchProductByProductId,
    deleteProductByProductId
};