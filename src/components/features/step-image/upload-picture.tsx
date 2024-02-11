"use client";

import { Button } from "@/components/ui/button";
import DropZone from "@/components/ui/drop-zone";
import { updateShowImageStatus } from "@/data/actions/show";
import { Show } from "@/data/schema";
import { uploadFile } from "@/data/supabase";
import { getImageURL } from "@/lib/image";
import { FileImage, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import UploadImageStatus from "./upload-image-status";

interface UploadPicutreProps {
  show: Show;
  pictureName: string;
  imageID: 1 | 2;
}

const getImageDefaultValue = (show: Show, imageID: 1 | 2) => {
  if (imageID === 1 && show.image1Uploaded) {
    return getImageURL(show.image1Name);
  } else if (imageID === 2 && show.image2Uploaded) {
    return getImageURL(show.image2Name);
  }

  return undefined;
};

const UploadPicture = ({ show, pictureName, imageID }: UploadPicutreProps) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [hadError, setHadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | undefined>(() =>
    getImageDefaultValue(show, imageID),
  );

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = async (file: File) => {
    setSelectedFile(file);
    setUploading(true);

    const response = await uploadFile(file, pictureName);
    if (!response) {
      setHadError(true);
    } else {
      updateShowImageStatus(show.id, imageID, true);
    }

    setUploading(false);
  };

  const reset = () => {
    setHadError(false);
    setPreview(undefined);
    setSelectedFile(undefined);
    updateShowImageStatus(show.id, imageID, false);
  };

  return (
    <>
      <UploadImageStatus preview={!!preview} uploading={uploading} />
      {preview ? (
        <div className="flex flex-col items-center gap-3">
          <div className="relative mx-auto h-[500px] w-full sm:w-96">
            <Image src={preview} alt="" className="rounded" fill objectFit="contain" />
          </div>
          {hadError ? (
            <Button
              size="sm"
              className="w-full sm:w-64"
              variant="destructive"
              onClick={reset}
              disabled={uploading}
            >
              <Trash size={16} className="mr-2" />
              Recommencer
            </Button>
          ) : (
            <Button
              size="sm"
              className="w-full sm:w-64"
              variant="outline"
              onClick={reset}
              disabled={uploading}
            >
              <Trash size={16} className="mr-2" />
              Changer l&apos;image
            </Button>
          )}
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

export default UploadPicture;
