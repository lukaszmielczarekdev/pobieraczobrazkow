import { Typography } from "@mui/material";
import PulsatingText from "../atoms/PulsatingText";

const HeroHeader = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        my: 2,
        fontWeight: 900,
        lineHeight: 1.2,
        textAlign: "center",
      }}
    >
      A
      <PulsatingText text={"fast"} />
      and
      <PulsatingText text={"reliable"} />
      place to download images from the internet.
    </Typography>
  );
};

export default HeroHeader;
