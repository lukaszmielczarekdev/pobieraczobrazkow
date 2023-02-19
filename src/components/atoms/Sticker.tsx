import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { StickerProps } from "../../utils/interfaces";

const Sticker = ({ text, rotate, bgcolor, fontSize }: StickerProps) => {
  return (
    <Box
      component={"article"}
      sx={{
        background: bgcolor,
        margin: "1rem",
        padding: { xs: "1rem", sm: "2rem" },
        width: "fit-content",
        maxWidth: { xs: "100%", sm: "25%" },
        borderRadius: "25px",
        rotate,
      }}
    >
      <Typography
        sx={{ fontSize: fontSize ? fontSize : "1rem", lineHeight: 1.5 }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default memo(Sticker);
