import { Box } from "@mui/material";

const HeroContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <Box
      component={"section"}
      maxWidth={"lg"}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "85%" },
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gridGap: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: { xs: "2rem", sm: "4.5rem 2rem", md: "6rem" },
        borderRadius: { xs: "none", sm: "25px" },
        background:
          "linear-gradient(90deg, rgba(253,243,248,1) 0%, rgba(238,242,255,1) 100%)",
      }}
    >
      {children}
    </Box>
  );
};

export default HeroContainer;
