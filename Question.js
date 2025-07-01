const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: String,
  type: String, // 'technical' or 'behavioral'
  topic: String,
});

module.exports = mongoose.model("Question", QuestionSchema);

