import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { upload } from "util/upload";

export default async function fileParse(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const formData = new formidable.IncomingForm();

  const fileData = {
    fileName: "",
    fileType: "",
    fileSize: 0,
    fileExtension: "",
    originalFileName: "",
    submissionName: "",
    selectedPrinter: "",
    uploadedBy: "",
    uploadedOn: "",
    filePath: "",
  };

  formData.uploadDir = "./uploads";
  formData.keepExtensions = true;

  formData.on("fileBegin", (field, file) => {
    const fileExtension = getFileExtension(file.originalFilename);
    const fileName = uuidv4() + "." + fileExtension;
    file.filepath = path.join(formData.uploadDir, fileName);

    fileData.fileName = fileName;
    fileData.fileType = file.mimetype;
    fileData.fileExtension = fileExtension;
    fileData.originalFileName = file.originalFilename;
  });

  formData.parse(req, (err, fields, files) => {
    fileData.selectedPrinter = fields.printerName;
    fileData.submissionName = fields.submissionName;
    fileData.uploadedOn = new Date().toISOString();
    fileData.fileSize = files.toBePrintedFile.size;
    fileData.filePath = files.toBePrintedFile.filepath;

    // TODO: Add user id to file metadata
    // TODO: Store file and metadata in database
    console.log(fileData);
  });

  formData.on("end", async () => {
    const status = await upload(fileData.filePath, fileData.fileName);
    return res.status(status);
  });

  return res.status(500);
}

function getFileExtension(filename: string) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
