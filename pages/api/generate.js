import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  const completion = await openai.createCompletion("text-curie-001", {
    prompt: req.body.question,
    temperature: 0.6,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.status(200).json({ answer: completion.data.choices[0].text });
}
