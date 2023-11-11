"use client";

import { Button } from "@/components/ui/button";
import DropZone from "@/components/ui/drop-zone";
import { FileImage, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const UploadPicutre = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <>
      {preview ? (
        <div className="flex flex-col items-center gap-3">
          <div className="relative mx-auto h-[500px] w-full sm:w-96">
            <Image src={preview} alt="" className="rounded" fill objectFit="contain" />
          </div>
          <Button
            size="sm"
            className="w-full sm:w-64"
            variant="outline"
            onClick={() => setPreview("")}
          >
            <Trash size={16} className="mr-2" />
            Changer l&apos;image
          </Button>
        </div>
      ) : (
        <DropZone
          description="Sélectionner une photo (jpg, jpeg, png)"
          accept=".jpg, .jpeg, .png"
          onFilechange={handleFileChange}
        >
          <FileImage className="inline" size={64} strokeWidth={1} />
        </DropZone>
      )}
    </>
  );
};

export default UploadPicutre;
