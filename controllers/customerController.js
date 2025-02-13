const Customer = require("../models/customer");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json({
      message: "Customers fetched successfully",
      success: true,
      data: customers,
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return res.status(500).json({
      message: "Error fetching customers",
      success: false,
      error: error.message,
    });
  }
};

const createCustomer = async (req, res) => {
  const {
    number_asked,
    status,
    fullName,
    email,
    password,
    plan_type,
    team_member,
    plans,
    number_type,
    toll_free_no,
    local_no,
    current_no,
    price,
    address,
    state,
    city,
    zip_code,
    temp,
    no_of_users,
  } = req.body;

  if (
    !number_asked ||
    !status ||
    !fullName ||
    !email ||
    !password ||
    !plan_type ||
    !team_member ||
    !plans ||
    !number_type ||
    !toll_free_no ||
    !local_no ||
    !current_no ||
    !price ||
    !address ||
    !state ||
    !city ||
    !zip_code ||
    !temp ||
    !no_of_users
  ) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    const newCustomer = new Customer({
      number_asked,
      status,
      fullName,
      email,
      password,
      plan_type,
      team_member,
      plans,
      number_type,
      toll_free_no,
      local_no,
      current_no,
      price,
      address,
      state,
      city,
      zip_code,
      temp,
      no_of_users,
    });

    await newCustomer.save();

    return res.status(201).json({
      message: "Customer created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    return res.status(500).json({
      message: "Error creating customer",
      success: false,
      error: error.message,
    });
  }
};

const editCustomer = async (req, res) => {
  const { customerId } = req.params;
  const {
    number_asked,
    status,
    fullName,
    email,
    password,
    plan_type,
    team_member,
    plans,
    number_type,
    toll_free_no,
    local_no,
    current_no,
    price,
    address,
    state,
    city,
    zip_code,
    temp,
    no_of_users,
  } = req.body;

  if (
    !number_asked ||
    !status ||
    !fullName ||
    !email ||
    !password ||
    !plan_type ||
    !team_member ||
    !plans ||
    !number_type ||
    !toll_free_no ||
    !local_no ||
    !current_no ||
    !price ||
    !address ||
    !state ||
    !city ||
    !zip_code ||
    !temp ||
    !no_of_users
  ) {
    return res.status(400).json({
      message: "At least one field is required to update.",
      success: false,
    });
  }

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      {
        number_asked,
        status,
        fullName,
        email,
        password,
        plan_type,
        team_member,
        plans,
        number_type,
        toll_free_no,
        local_no,
        current_no,
        price,
        address,
        state,
        city,
        zip_code,
        temp,
        no_of_users,
      },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({
        message: "Customer not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Customer updated successfully",
      success: true,
      data: updatedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating customer",
      success: false,
      error: error.message,
    });
  }
};

const getCustomerById = async (req, res) => {
  const { customerId } = req.params;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Customer fetched successfully",
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching customer",
      success: false,
      error: error.message,
    });
  }
};

const deleteCustomer = async (req, res) => {
  const { customerId } = req.params;

  try {
    const customer = await Customer.findByIdAndDelete(customerId);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Customer deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting customer",
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getCustomers,
  createCustomer,
  editCustomer,
  getCustomerById,
  deleteCustomer,
};
