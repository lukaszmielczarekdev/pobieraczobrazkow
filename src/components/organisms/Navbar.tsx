import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Link } from "@mui/material";
import Logo from "../../assets/images/logo.png";

const pages = ["archive", "about"];

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
      sx={{ background: "white", color: "black", paddingBottom: "3rem" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: ".5rem  1.5rem .5rem 1.5rem",
            md: "0  2rem",
          },
          maxWidth: { xs: "100%", sm: "80%" },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Avatar
            alt="Rounded blue wave. Imagewave logo."
            src={Logo}
            sx={{
              height: "1.4rem",
              width: "1.4rem",
              mr: 1.5,
            }}
          />
          <Link
            onClick={handleCloseNavMenu}
            component={RouterLink}
            to={"/"}
            sx={{
              fontSize: "1.2rem",
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontWeight: 600,
              color: "black",
              textDecoration: "none",
              opacity: 0.7,
            }}
          >
            Imagewave
          </Link>
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
          <Link
            onClick={handleCloseNavMenu}
            component={RouterLink}
            to={"/"}
            sx={{
              fontSize: "1.2rem",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 600,
              color: "black",
              textDecoration: "none",
              opacity: 0.7,
            }}
          >
            Imagewave
          </Link>
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
                  <Link
                    key={page}
                    component={RouterLink}
                    to={`/${page}`}
                    color="inherit"
                    sx={{
                      mr: 2,
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                      textTransform: "capitalize",
                      opacity: 0.7,
                    }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={`/${page}`}
                color="inherit"
                sx={{
                  my: 2.5,
                  mx: 1.5,
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  opacity: 0.7,
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default TopNavbar;
