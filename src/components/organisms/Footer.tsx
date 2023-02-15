import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Link, List, ListItem, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: "5rem 5rem 0 0",
          background: "rgb(18,25,40)",
          height: "5rem",
        }}
      ></Box>
      <Box
        sx={{
          background: "rgb(18,25,40)",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            padding: "1rem 3rem 3rem 3rem",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "3rem",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", sm: "50%", lg: "30%" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Avatar
              alt={"Rounded blue wave. Imagewave logo."}
              src={Logo}
              sx={{ margin: "1rem" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
                fontWeight: 900,
                lineHeight: 1.2,
                textAlign: "center",
                color: "white",
              }}
            >
              It's good to have such a
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
                download
              </Typography>
              assistant.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              maxWidth: { xs: "100%", sm: "50%", lg: "30%" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: ".1rem",
              }}
            >
              Imagewave
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: 0 }}>
                <Link
                  component={RouterLink}
                  to={"/archive"}
                  color="inherit"
                  sx={{
                    mr: 2,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    opacity: 0.7,
                  }}
                >
                  Archive
                </Link>
              </ListItem>
              <ListItem sx={{ paddingLeft: 0 }}>
                <Link
                  component={RouterLink}
                  to={"/about"}
                  color="inherit"
                  sx={{
                    mr: 2,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    opacity: 0.7,
                  }}
                >
                  About
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
