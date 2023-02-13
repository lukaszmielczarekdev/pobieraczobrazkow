import { useContext } from "react";
import ImageContext from "../../contexts/imageContext";
import { Box } from "@mui/material";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  const { images } = useContext(ImageContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: { xs: "none", sm: "25px" },
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {images.length > 0
        ? images.map((id: string) => <ImageCard key={id} id={id} />)
        : null}
    </Box>
  );
};

export default ImageGallery;
