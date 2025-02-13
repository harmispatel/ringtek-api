const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    number_asked: { type: Number, required: true },
    status: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    plan_type: { type: String, required: true },
    team_member: { type: String, default: null },
    plans: { type: String, default: null },
    number_type: { type: String, required: true },
    toll_free_no: { type: Number, default: null },
    local_no: { type: Number, default: null },
    current_no: { type: Number, required: true },
    price: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    zip_code: { type: Number, required: true },
    temp: { type: String, required: true },
    no_of_users: { type: Number, required: true },
  },
  { timestamps: true }
);

const Leads = mongoose.model("Leads", LeadSchema);

module.exports = Leads;
