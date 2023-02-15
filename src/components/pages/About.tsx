import { Avatar, Box, Typography } from "@mui/material";
import FadeIn from "../atoms/FadeIn";
import AboutContainer from "../containers/AboutContainer";
import Logo from "../../assets/images/logo.png";

const About = () => {
  return (
    <AboutContainer>
      <Box
        component={"article"}
        sx={{
          width: { xs: "100%", sm: "80%", md: "80%" },
          padding: {
            xs: "2rem 0 6rem 0",
            sm: "4rem 4rem 8rem 4rem",
            md: "4rem 4rem 8rem 4rem",
          },
        }}
      >
        <FadeIn duration={0.6}>
          <Typography
            sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem" }, lineHeight: 1.5 }}
          >
            Downloading images from the internet can be a hassle, especially if
            you don't see a download button anywhere.
          </Typography>
        </FadeIn>
      </Box>
      <Box
        component={"article"}
        sx={{
          background: "rgba(253,243,248,1)",
          padding: { xs: "2rem", sm: "4rem" },
          width: { xs: "100%", sm: "90%", md: "90%" },
          borderRadius: "25px",
        }}
      >
        <FadeIn duration={0.6}>
          <Typography
            sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem" }, lineHeight: 1.5 }}
          >
            In such a situation it is good to have a download assistant that
            provides the appropriate link and stores the image. At a later time,
            you can go back to the gallery of downloaded files, freely recover
            it and download the images again. 😃
          </Typography>
        </FadeIn>
      </Box>
      <Box
        component={"article"}
        sx={{
          width: { xs: "100%", sm: "80%", md: "80%" },
          padding: {
            xs: "6rem 0 2rem 0",
            sm: "6rem 4rem 4rem 4rem",
            md: "8rem 4rem 4rem 4rem",
          },
        }}
      >
        <FadeIn duration={0.6}>
          <Typography
            sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem" }, lineHeight: 1.5 }}
          >
            Imagewave is an assistant that gives you all these possibilities and
            is constantly evolving. No login required.
          </Typography>
        </FadeIn>
      </Box>
      <Box
        sx={{
          width: { xs: "80%", sm: "60%", md: "60%" },
          padding: {
            xs: "2rem 0",
            sm: "4rem 4rem 1rem 4rem",
            md: "8rem 4rem 0 4rem",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={"Rounded blue wave. Imagewave logo."}
          src={Logo}
          sx={{
            margin: ".2rem .5rem .6rem 0",
            height: "4rem",
            width: "4rem",
            cursor: "pointer",
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.3rem" },
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              fontSize: "inherit",
              fontWeight: 900,
              lineHeight: 1.2,
              textAlign: "center",
              display: "inline-block",
              m: "0 .5rem",
            }}
          >
            Imagewave
          </Typography>
          is free. And always will be.
        </Typography>
      </Box>
    </AboutContainer>
  );
};

export default About;
