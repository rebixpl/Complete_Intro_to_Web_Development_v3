import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E 4.0 API");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const url = "http://192.168.0.119:7860/sdapi/v1/txt2img";

    const negative_prompt =
      "paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans, lowres, bad anatomy, bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,missing legs,extra digit,penis,man,cock,(ng_deepnegative_v1_75t),(negative_hand-neg)";

    const sd_model_checkpoint =
      "epicrealism_pureEvolutionV35.safetensors [ad5d4d0031]";

    const sdPayload = {
      prompt,
      negative_prompt,
      sd_model_checkpoint,
      seed: -1,
      steps: 20,
      n_iter: 1,
      restore_faces: false,
      hr_scale: 2,
      enable_hr: true,
      hr_upscaler: "R-ESRGAN 4x+",
      denoising_strength: 0.7,
      sampler_index: "UniPC",
      sampler_name: "UniPC",
      width: 512,
      height: 512,
      cfg_scale: 7.5,
    };
    const aiResponse = await axios.post(url, sdPayload);

    if (aiResponse.data) {
      // Assuming the response contains the image in base64 inside a json structure
      res.status(200).json({ photo: aiResponse.data.images[0] });
    } else {
      res
        .status(500)
        .json({ message: "No data received from the image generation API" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
