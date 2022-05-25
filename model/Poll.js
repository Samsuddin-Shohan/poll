const { Schema, model } = require("mongoose");

const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
  },
});
const Poll = model("Poll", pollSchema);

module.exports = Poll;
