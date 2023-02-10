import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import Logo from "../assets/images/logo.png";

const pages = ["Community", "About"];

const TopNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{ background: "white", color: "black" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: ".5rem  1.5rem .5rem 1.5rem",
            md: "0  2rem",
          },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Avatar
            alt="White skeleton picture on a blue background. Picturewave logo."
            src={Logo}
            sx={{
              height: "1.4rem",
              width: "1.4rem",
              mr: 1.5,
            }}
          />
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: "1.2rem",
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Picturewave
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Website logo"
            src={Logo}
            sx={{
              display: { xs: "flex", md: "none" },
              height: "1.4rem",
              width: "1.4rem",
              mr: 1.5,
            }}
          />
          <Typography
            variant="h2"
            noWrap
            component="a"
            href=""
            sx={{
              fontSize: "1.2rem",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Picturewave
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1.5,
                  mx: 0.5,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontSize: "1.1rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default TopNavbar;
