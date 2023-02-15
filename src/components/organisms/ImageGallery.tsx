import { useContext, useMemo } from "react";
import ImageContext from "../../contexts/imageContext";
import { Box } from "@mui/material";
import ImageCard from "./ImageCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css";

export const breakpoints = {
  0: {
    items: 1,
  },
  550: {
    items: 1,
  },
  760: {
    items: 2,
  },
  960: {
    items: 2,
  },
  1022: {
    items: 3,
  },
  1278: {
    items: 4,
  },
  1610: {
    items: 4,
  },
  2550: {
    items: 4,
  },
};

const ImageGallery = () => {
  const { images } = useContext(ImageContext);

  const items = useMemo(
    () => (images: string[]) =>
      images.map((id: string) => <ImageCard key={id} id={id} />),
    []
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: { xs: "none", sm: "25px" },
      }}
    >
      {images.length > 0 ? (
        <AliceCarousel
          controlsStrategy={"responsive"}
          responsive={breakpoints}
          keyboardNavigation
          items={items(images)}
        />
      ) : null}
    </Box>
  );
};

export default ImageGallery;
