const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: "boolean", default: false }
});

module.exports = recipientSchema;
