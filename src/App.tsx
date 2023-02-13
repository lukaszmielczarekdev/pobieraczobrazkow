import { Navigate, Route, Routes } from "react-router-dom";
import { ImageProvider } from "./contexts/imageContext";
import Archive from "./components/pages/Archive";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import TopNavbar from "./components/organisms/Navbar";
import { Box } from "@mui/material";
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
        <Routes>
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </ImageProvider>
  );
};

export default App;
