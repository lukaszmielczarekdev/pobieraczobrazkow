import { useState, useContext } from "react";
import ImageContext from "../contexts/imageContext";

const UrlInput = () => {
  const [url, setUrl] = useState<string | null>("");
  const { onAddDownloadToQueue } = useContext(ImageContext);

  const handleImageDownload = async (e: any) => {
    e.preventDefault();

    if (url) {
      onAddDownloadToQueue?.(url);
    } else {
      alert("Empty input");
    }
  };

  return (
    <form onSubmit={handleImageDownload}>
      <label>
        URL:
        <input
          required
          placeholder="Paste a URL"
          type="text"
          name="url"
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UrlInput;
