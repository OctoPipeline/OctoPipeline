import axios from "axios";
const FormData = require("form-data");

export async function upload(file: any, filename: string) {
  let form = new FormData();

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
