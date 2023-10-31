import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const UploadSignature = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadingFile, setUploadingFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];

      // Clear previous progress and file
      setUploadProgress(0);
      setUploadingFile(file);

      try {
        // Simulate uploading with a timeout (replace with actual upload logic)
        const uploadInterval = 100; // Milliseconds
        const totalSteps = 100; // Total steps to reach 100%
        let currentStep = 0;

        const uploadIntervalId = setInterval(() => {
          if (currentStep < totalSteps) {
            currentStep++;
            setUploadProgress((currentStep / totalSteps) * 100);
          } else {
            // Upload is complete
            clearInterval(uploadIntervalId);
            setUploadingFile(null);

            // Simulated delay (1 second) before showing uploaded file
            setTimeout(() => {
              setUploadedFiles([...uploadedFiles, file]);
            }, 1000);
          }
        }, uploadInterval);
      } catch (error) {
        console.error("File upload error:", error);
      }
    },
    [uploadedFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf, .doc, .docx",
  });

  useEffect(() => {
    if (!uploadingFile) {
      setUploadProgress(0);
    }
  }, [uploadingFile]);

  return (
    <div>
      <div
        {...getRootProps()}
        className="p-4 border-dashed border-2 border-gray-300 rounded-md text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">
          Drag & drop some files here, or click to select files
        </p>
      </div>
      {uploadingFile && (
        <div className="mt-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-medium inline-block py-1 px-2  rounded-full text-white bg-[#1677FF]">
                  In Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-black">
                  {`${uploadProgress.toFixed(0)}%`}
                </span>
              </div>
            </div>
            <div className="flex rounded-full h-1 bg-[#e4e4e4]">
              <div
                style={{ width: `${uploadProgress}%` }}
                className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1677FF] transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Uploaded Files:</h3>
        <ul className="list-disc list-inside">
          {uploadedFiles.map((file) => (
            <li key={file.name} className="mt-1 text-gray-600">
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="button">
        <button className="bg-[#1677FF] text-white px-4 py-2 rounded-md mt-4">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadSignature;
