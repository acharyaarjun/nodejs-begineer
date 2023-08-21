const express = require('express');
const router = express.Router();
const {getAllUsers, createCustomer} = require('../controllers/customer.controler');

router.get('/', (req, res, next) => {
    console.log("Middleware Called");
    next();
} ,getAllUsers);
router.post('/', (req, res, next) => {
    console.log("Middleware Called");
    next();
} ,createCustomer);

module.exports = router;