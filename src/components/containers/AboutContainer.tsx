import { Box } from "@mui/material";

const AboutContainer = ({ children }: React.PropsWithChildren) => {
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
        margin: "0 auto 1rem auto",
        padding: { xs: "2rem", sm: "4.5rem 2rem", md: "4rem 6rem" },
      }}
    >
      {children}
    </Box>
  );
};

export default AboutContainer;
