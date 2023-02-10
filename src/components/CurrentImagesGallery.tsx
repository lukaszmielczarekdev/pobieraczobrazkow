import { useContext, useState } from "react";
import ImageContext from "../contexts/imageContext";
import { Box, Button, Link, List, ListItem } from "@mui/material";
import UrlInput from "./UrlInput";
import ImageInfoModal from "./ImageInfo";
import VisibilityIcon from "@mui/icons-material/Visibility";

const CurrentImagesGallery = () => {
  const { images } = useContext(ImageContext);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: "90vh",
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
          <ListItem
            key={url}
            sx={{ width: "fit-content", alignItems: "flex-end" }}
          >
            <Link href={url}>
              <VisibilityIcon sx={{ fontSize: "1.5rem" }} />
            </Link>
            <Button
              onClick={() => {
                setCurrentUrl(url);
                handleOpen();
              }}
            >
              Info
            </Button>
          </ListItem>
        ))}
      </List>
      <ImageInfoModal
        imageUrl={currentUrl}
        isOpen={open}
        handleOpen={handleOpen}
      />
    </Box>
  );
};

export default CurrentImagesGallery;
