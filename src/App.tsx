import { Box } from "@mui/material";
import TopNavbar from "./components/Navbar";
import Hero from "./components/pages/Hero";
import AllImagesGallery from "./components/AllImagesGallery";
import { ImageProvider } from "./contexts/imageContext";
import "./App.css";

const App = () => {
  return (
    <ImageProvider>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxHeight: "100vh",
        }}
      >
        <TopNavbar />
        <Hero />
        <Box>
          <AllImagesGallery />
        </Box>
      </Box>
    </ImageProvider>
  );
};

export default App;
