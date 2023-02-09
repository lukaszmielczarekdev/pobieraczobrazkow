import { useContext } from "react";
import ImageContext from "../contexts/imageContext";
import { Box, Link, List, ListItem } from "@mui/material";
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
      <UrlInput />
      <List
        sx={{
          width: "100%",
          overflow: "scroll",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {images?.map((url: string) => (
          <ListItem key={url} sx={{ width: "fit-content" }}>
            <Link href={url}>Image</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CurrentImagesGallery;
