import H2 from "@/components/typography/h2";
import { getShowById } from "@/data/actions/show";
import { notFound } from "next/navigation";
import UploadPicture from "./upload-picture";

interface ImageManagementProps {
  showId: number;
}

const ImageManagement = async ({ showId }: ImageManagementProps) => {
  const show = await getShowById(showId);
  if (!show || !show.image1Name || !show.image2Name) {
    notFound();
  }

  return (
    <div className="mb-20 flex gap-4">
      <div className="flex w-full flex-col gap-2">
        <H2>Première image</H2>
        <UploadPicture pictureName={show.image1Name} />
      </div>
      <div className="flex w-full flex-col gap-2">
        <H2>Seconde image</H2>
        <UploadPicture pictureName={show.image2Name} />
      </div>
    </div>
  );
};

export default ImageManagement;
