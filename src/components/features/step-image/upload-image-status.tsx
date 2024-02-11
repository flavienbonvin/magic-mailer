import { Ban, Check, Loader } from "lucide-react";

interface UploadImageStatusProps {
  preview: boolean;
  uploading: boolean;
}

const UploadImageStatus = ({ preview, uploading }: UploadImageStatusProps) => {
  let message = "Aucune image";
  if (uploading) {
    message = "Envoi en cours...";
  } else if (preview) {
    message = "Image en ligne";
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <p>{message}</p>
      {!uploading && !preview && <Ban size={16} className="text-red-600" />}
      {uploading && !preview && <Loader className="text-yellow-600" size={16} />}
      {!uploading && preview && <Check size={16} className="text-green-600" />}
    </div>
  );
};

export default UploadImageStatus;
