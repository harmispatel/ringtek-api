const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    number_asked: { type: Number, default: null },
    status: { type: String, default: null },
    fullName: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    plan_type: { type: String, default: null },
    team_member: { type: String, default: null },
    plans: { type: String, default: null },
    number_type: { type: String, default: null },
    toll_free_no: { type: Number, default: null },
    local_no: { type: Number, default: null },
    current_no: { type: Number, default: null },
    price: { type: String, default: null },
    address: { type: String, default: null },
    state: { type: String, default: null },
    city: { type: String, default: null },
    zip_code: { type: Number, default: null },
    temp: { type: String, default: null },
    no_of_users: { type: Number, default: null },
  },
  { timestamps: true }
);

const Leads = mongoose.model("Leads", LeadSchema);

module.exports = Leads;
