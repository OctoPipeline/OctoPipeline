import axios from "axios";
import { readFileSync } from "fs";
const FormData = require("form-data");
import path from "path";

export async function upload(filepath: string, filename: string) {
  let form = new FormData();
  const file = readFileSync(path.join("./", filepath));

  form.append("file", file, {
    filepath: filename,
  });

  const config = {
    baseURL: "http://localhost:80/api/",
    headers: {
      ...form.getHeaders(),
      "X-Api-Key": process.env.OCTOPRINT_API_KEY,
      "Content-Length": form.getLengthSync(),
    },
  };

  const status = axios
    .post("/files/local", form, config)
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      return err.status;
    });

  return status;
}
