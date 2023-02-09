import "./App.css";
import AllImagesGallery from "./components/AllImagesGallery";
import CurrentImagesGallery from "./components/CurrentImagesGallery";
import UrlInput from "./components/UrlInput";
import { ImageProvider } from "./contexts/imageContext";

function App() {
  return (
    <ImageProvider>
      <div className="App">
        <UrlInput />
        <CurrentImagesGallery />
        <AllImagesGallery />
      </div>
    </ImageProvider>
  );
}

export default App;
