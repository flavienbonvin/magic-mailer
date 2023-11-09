"use client";

import { ChangeEvent, PropsWithChildren, useRef } from "react";
import { Button } from "./button";

interface FileUploadButtonProps extends PropsWithChildren {
  accept: HTMLInputElement["accept"];
  onFilechange: (file: File) => void;
}

const FileUploadButton = ({ children, accept, onFilechange }: FileUploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    onFilechange(event.target.files[0]);
  };

  return (
    <>
      <input
        type="file"
        accept={accept}
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <Button size="sm" onClick={handleButtonClick}>
        {children}
      </Button>
    </>
  );
};

export default FileUploadButton;
