const openai = require("../utils/openai");

exports.generateQuestions = async (req, res) => {
  const { topic, type } = req.body;

  const prompt = `Generate 5 ${type} interview questions on ${topic}.`;

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  const questions = completion.data.choices[0].message.content.split("\n").filter(Boolean);
  res.json({ questions });
};
