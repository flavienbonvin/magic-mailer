"use client";

import { ChangeEvent, PropsWithChildren, useRef } from "react";

interface DropZoneProps extends PropsWithChildren {
  description: string;
  accept: HTMLInputElement["accept"];
  onFilechange: (file: File) => void;
}

const DropZone = ({ children, accept, description, onFilechange }: DropZoneProps) => {
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
      <button
        type="button"
        className="relative block w-full rounded-lg border border-dashed p-12 hover:border-accent-foreground hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={handleButtonClick}
      >
        <div className="mx-auto text-center">
          {children}
          <span className="mt-3 block text-sm font-semibold">{description}</span>
        </div>
      </button>
    </>
  );
};

export default DropZone;
