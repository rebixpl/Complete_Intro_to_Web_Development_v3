import express from "express";
import * as dotenv from "dotenv";
// import { Configuration, OpenAIApi } from "openai";
import { OpenAI } from "openai";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E 4.0 API");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
