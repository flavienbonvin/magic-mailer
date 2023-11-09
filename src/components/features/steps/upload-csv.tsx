"use client";
import FileUploadButton from "@/components/ui/file-upload";
import { Upload } from "lucide-react";

const UploadCsv = () => {
  const handleFileChange = () => {};
  return (
    <FileUploadButton accept=".csv" onFilechange={handleFileChange}>
      <>
        <Upload size={16} className="mr-2" />
        Upload CSV
      </>
    </FileUploadButton>
  );
};

export default UploadCsv;
