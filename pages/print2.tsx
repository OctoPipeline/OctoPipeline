import { StrictMode } from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileItem } from "@dropzone-ui/react";
function App() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: React.SetStateAction<never[]>) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: any) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
      style={{ minWidth: "505px" }}
      onChange={updateFiles}
      value={files}
    >
      {files.map((file) => (
        <FileItem {...file} onDelete={removeFile} preview info key={file.id} />
      ))}
    </Dropzone>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
