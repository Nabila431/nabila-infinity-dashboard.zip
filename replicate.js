import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  const { prompt } = req.body;
  const output = await replicate.run("mistralai/mistral-7b-v0.1", {
    input: { prompt }
  });
  res.status(200).json({ output });
}