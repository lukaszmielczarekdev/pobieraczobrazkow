import { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageContext from "../contexts/imageContext";
import { Image } from "../utils/interfaces";
import { Box } from "@mui/material";
import UrlInput from "./UrlInput";

const CurrentImagesGallery = () => {
  const { images } = useContext(ImageContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: "100vh",
        alignSelf: "baseline",
        paddingBottom: "1rem",
      }}
    >
      <ImageList>
        <ImageListItem key="Subheader" cols={2}>
          <UrlInput />
        </ImageListItem>
        {images?.map((image: Image) => (
          <ImageListItem key={image._id}>
            <img
              style={{ borderRadius: "10px" }}
              src={image.file}
              srcSet={image.file}
              alt={"Downloaded"}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{ borderRadius: "10px" }}
              title={`Added: ${image.addDate}`}
              subtitle={`Downloaded: ${image.downloadDate}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default CurrentImagesGallery;
