const express = require("express");

const { getAuthUsersList } = require("../controllers/userAuthController");

const {
  getUsers,
  createUser,
  editUser,
  getUserById,
  deleteUser,
} = require("../controllers/userController");

const {
  getLeads,
  createLead,
  editLead,
  getLeadById,
  deleteLead,
  transferLead,
} = require("../controllers/leadController");

const {
  getCustomers,
  createCustomer,
  editCustomer,
  getCustomerById,
  deleteCustomer,
} = require("../controllers/customerController");

const router = express.Router();

router.get("/auth-users-list", getAuthUsersList);

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:userId", editUser);
router.get("/users/:userId", getUserById);
router.delete("/users/:userId", deleteUser);

router.get("/leads", getLeads);
router.post("/leads", createLead);
router.put("/leads/:leadId", editLead);
router.get("/leads/:leadId", getLeadById);
router.delete("/leads/:leadId", deleteLead);
router.post("/transfer-lead/:leadId", transferLead);

router.get("/customers-list", getCustomers);
router.post("/create-customer", createCustomer);
router.put("/edit-customer/:customerId", editCustomer);
router.get("/single-customer/:customerId", getCustomerById);
router.delete("/delete-customer/:customerId", deleteCustomer);

module.exports = router;
