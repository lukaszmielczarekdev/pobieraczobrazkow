import { Box, Typography } from "@mui/material";
import { StickerProps } from "../../utils/types";

const Sticker = ({ text, rotate, bgcolor }: StickerProps) => {
  return (
    <Box
      component={"article"}
      sx={{
        background: bgcolor,
        margin: "1rem",
        padding: { xs: "1rem", sm: "2rem" },
        width: "fit-content",
        borderRadius: "25px",
        rotate,
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "1rem", sm: "1rem" }, lineHeight: 1.5 }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Sticker;
