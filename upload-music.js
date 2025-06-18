import cloudinary from "@/lib/cloudinary";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const file = files.musicFile.filepath;
    const result = await cloudinary.uploader.upload(file, { resource_type: "video" });
    res.status(200).json({ url: result.secure_url });
  });
}