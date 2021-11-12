import axios from "axios";
const FormData = require("form-data");

export function upload(file: any, filename: string) {
  let form = new FormData();

  form.append("file", file, {
    filepath: filename,
  });

  const config = {
    baseURL: "http://localhost:80/api/",
    headers: {
      ...form.getHeaders(),
      "X-Api-Key": "31331488D0734D6D9AA373F7C644D037",
      "Content-Length": form.getLengthSync(),
    },
  };

  axios
    .post("/files/local", form, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
