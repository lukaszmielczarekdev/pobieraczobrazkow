import { useContext } from "react";
import ImageContext from "../contexts/imageContext";
import { Image } from "../utils/interfaces";

const CurrentImagesGallery = () => {
  const { images } = useContext(ImageContext);
  return (
    <div style={{ display: "flex" }}>
      {images.map(({ _id, file }: Image) => (
        <img key={_id} src={file} alt="Downloaded" width="300" height="300" />
      ))}
    </div>
  );
};

export default CurrentImagesGallery;
