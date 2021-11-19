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

  const uploadConfig = {
    baseURL: "http://localhost:80/api/",
    headers: {
      ...form.getHeaders(),
      "X-Api-Key": process.env.OCTOPRINT_API_KEY,
      "Content-Length": form.getLengthSync(),
    },
  };

  const uploadStatus = await axios
    .post("/files/local", form, uploadConfig)
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      return err.status;
    });

  console.log("Upload Status be like:", uploadStatus);

  const printConfig: any = {
    baseURL: "http://localhost:80/api/",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.OCTOPRINT_API_KEY,
    },
  };

  const printStatus = await axios
    .post(
      `files/local/${filename}`,
      {
        command: "select",
        print: true,
      },
      printConfig
    )
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      return err.status;
    });

  console.log("Print Status be like:", printStatus);
  return printStatus;
}
