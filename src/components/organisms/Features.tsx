import { Box, Button } from "@mui/material";
import Sticker from "../atoms/Sticker";
import { StickerProps } from "../../utils/types";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Features = () => {
  const stickers = [
    {
      id: 1,
      text: "Just paste the link to the image to download all the information.",
      rotate: "5deg",
      bgcolor: "rgb(250,240,248)",
    },
    {
      id: 2,
      text: "Downloaded files are saved in the database so that they can be easily retrieved later.",

      rotate: "-5deg",
      bgcolor: "rgb(255,250,235)",
    },
    {
      id: 3,
      text: "Work is underway on the possibility of sharing downloaded files on social media platforms.",
      rotate: "5deg",
      bgcolor: "rgb(245,245,255)",
    },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        component={"section"}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: { xs: "2rem", sm: ".5rem" },
          paddingTop: "5rem",
          marginY: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {stickers.map((sticker: StickerProps) => (
          <Sticker fontSize={"1.4rem"} {...sticker} />
        ))}
      </Box>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        startIcon={<KeyboardDoubleArrowUpIcon />}
        sx={{
          mt: "1rem",
          background: "rgba(245,115,180)",
          border: "2px solid white",
          borderRadius: ".5rem",
          color: "white",
          fontWeight: 600,
          padding: ".5rem 1.2rem",
          fontSize: "1.2rem",
          textTransform: "capitalize",
        }}
      >
        Try now
      </Button>
    </Box>
  );
};

export default Features;
