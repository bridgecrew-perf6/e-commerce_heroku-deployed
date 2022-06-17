const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// // // CREATE SELLER!
const createSeller = async(req, res) => {
    // const { name, email, gstNumber, phoneNumber } = req.body;
    try {
        const result = await prisma.seller.create({
            data: req.body,
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};


// // // GET SELLER WITH SELLER ID!
const getSellerBySellerId = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await prisma.seller.findUnique({
            where: { id }
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};


// // // GET SELLERS!
const getSellers = async(req, res) => {
    const { offset, limit, sortBy, sortOrder = 'asc', search } = req.query;
    let query = {};
    if (offset && limit) {
        query['skip'] = parseInt(offset),
            query['take'] = parseInt(limit)
    }
    if (sortBy && sortOrder) {
        query['orderBy'] = {
            [sortBy]: sortOrder
        }
    }
    if (search) {
        query['where'] = {
            name: {
                search: search
            }
        }
    }
    console.log(search);
    try {
        const result = await prisma.seller.findMany(query);
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
};



const patchSellerBySellerId = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await prisma.seller.update({
            where: { id },
            data: req.body
        })
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
}



module.exports = {
    createSeller,
    getSellerBySellerId,
    getSellers,
    patchSellerBySellerId
};