import { Box } from "@mui/material";

const ImageGallery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: { xs: "none", sm: "25px" },
        flexWrap: "wrap",
        border: "2px solid white",
      }}
    ></Box>
  );
};

export default ImageGallery;
