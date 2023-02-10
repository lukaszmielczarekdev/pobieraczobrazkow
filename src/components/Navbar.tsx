import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const TopNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: ".5rem" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Image downloader
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavbar;
