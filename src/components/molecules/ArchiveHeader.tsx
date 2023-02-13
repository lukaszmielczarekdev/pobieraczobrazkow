import { Typography } from "@mui/material";

const ArchiveHeader = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" },
        my: 1,
        fontWeight: 900,
        lineHeight: 1.2,
        textAlign: "center",
      }}
    >
      Here you can view all
      <Typography
        component={"span"}
        sx={{
          fontSize: "inherit",
          fontWeight: 900,
          lineHeight: 1.2,
          textAlign: "center",
          display: "inline-block",
          textDecoration: "underline",
          opacity: 0.7,
          m: "0 .6rem",
        }}
      >
        downloaded
      </Typography>
      images.
    </Typography>
  );
};

export default ArchiveHeader;
