const db = require("../models");
const { Customer } = db;

// yesri garey sidhai exports hunxa tala ko module.exports lekhnu pardaina tara yo best idea haina
// exports.getAllUsers = (req, res) => {

// };

const getAllUsers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.json(customers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createCustomer = async (req, res) => {
  try {
    const { email, name } = req.body;

    const customer = await Customer.create({
        email: email,
        name: name,
    });

    return res.status(201).json(customer);
    
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  createCustomer,
};
