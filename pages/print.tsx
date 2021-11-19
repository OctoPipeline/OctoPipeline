import React from "react";
import Link from "next/link";
// layout for page

import Auth from "layouts/Auth";
import axios from "axios";
export default function Login() {
  const [submissionName, setSubmissionName] = React.useState("");
  const [printerName, setPrinterName] = React.useState("");
  const [file, setFile] = React.useState(null);

  const handleSubmission = async () => {
    console.log(submissionName);
    console.log(printerName);
    console.log(file);
    if (submissionName !== "" && printerName !== "" && file) {
      const formData = new FormData();
      formData.append("submissionName", submissionName);
      formData.append("printerName", printerName);
      formData.append("toBePrintedFile", file);

      const response = await axios.post("/api/request", formData);
      return response;
    }
    return;
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-9/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-makerspace border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h1 className="text-white text-5xl font-bold">Print</h1>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Submission Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Submission name"
                    onChange={(e) => setSubmissionName(e.target.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Printer
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Printer Name"
                    onChange={(e) => setPrinterName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="file"
                    onChange={(e: any) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    onClick={handleSubmission}
                  >
                    Submit for approval
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
