const Lead = require("../models/lead");
const Customer = require("../models/customer");

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    return res.status(200).json({
      message: "Leads fetched successfully",
      success: true,
      data: leads,
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return res.status(500).json({
      message: "Error fetching leads",
      success: false,
      error: error.message,
    });
  }
};

const createLead = async (req, res) => {
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
    const newLead = new Lead({
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

    await newLead.save();

    return res.status(201).json({
      message: "Lead created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return res.status(500).json({
      message: "Error creating lead",
      success: false,
      error: error.message,
    });
  }
};

const editLead = async (req, res) => {
  const { leadId } = req.params;
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
    const updatedLead = await Lead.findByIdAndUpdate(
      leadId,
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

    if (!updatedLead) {
      return res.status(404).json({
        message: "Lead not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Lead updated successfully",
      success: true,
      data: updatedLead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating lead",
      success: false,
      error: error.message,
    });
  }
};

const getLeadById = async (req, res) => {
  const { leadId } = req.params;

  try {
    const lead = await Lead.findById(leadId);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Lead fetched successfully",
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching lead",
      success: false,
      error: error.message,
    });
  }
};

const deleteLead = async (req, res) => {
  const { leadId } = req.params;

  try {
    const lead = await Lead.findByIdAndDelete(leadId);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Lead deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting lead",
      success: false,
      error: error.message,
    });
  }
};

const transferLead = async (req, res) => {
  const { leadId } = req.params;

  try {
    const lead = await Lead.findById(leadId);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
        success: false,
      });
    }

    const customerData = {
      number_asked: lead.number_asked,
      fullName: lead.fullName,
      email: lead.email,
      password: lead.password,
      plan_type: lead.plan_type,
      number_type: lead.number_type,
      team_member: lead.team_member,
      plans: lead.plans,
      toll_free_no: lead.toll_free_no,
      local_no: lead.local_no,
      current_no: lead.current_no,
      price: lead.price,
      address: lead.address,
      state: lead.state,
      city: lead.city,
      zip_code: lead.zip_code,
      temp: lead.temp,
      no_of_users: lead.no_of_users,
      status: lead.status,
    };

    await Customer.create(customerData);

    await Lead.findByIdAndDelete(leadId);

    res.status(200).json({
      message: "Lead successfully transferred to Customer",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error transferring lead to customer",
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getLeads,
  createLead,
  editLead,
  getLeadById,
  deleteLead,
  transferLead,
};
