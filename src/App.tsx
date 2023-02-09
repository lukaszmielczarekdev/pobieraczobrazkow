import "./App.css";
import DownloadQueue from "./components/DownloadQueue";
import ImageGallery from "./components/ImageGallery";
import UrlInput from "./components/UrlInput";
import { ImageProvider } from "./contexts/imageContext";

function App() {
  return (
    <ImageProvider>
      <div className="App">
        <UrlInput />
        <DownloadQueue />
        <ImageGallery />
      </div>
    </ImageProvider>
  );
}

export default App;
