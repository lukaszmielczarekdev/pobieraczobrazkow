import { Box } from "@mui/material";
import "./App.css";
import AllImagesGallery from "./components/AllImagesGallery";
import CurrentImagesGallery from "./components/CurrentImagesGallery";
import TopNavbar from "./components/Navbar";
import { ImageProvider } from "./contexts/imageContext";

function App() {
  return (
    <ImageProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxHeight: "100vh",
        }}
      >
        <TopNavbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            padding: "0 1rem",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gridGap: "2rem",
          }}
        >
          <CurrentImagesGallery />
          <AllImagesGallery />
        </Box>
      </Box>
    </ImageProvider>
  );
}

export default App;
