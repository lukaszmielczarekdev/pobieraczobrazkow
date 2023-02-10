import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import ImageContext from "../contexts/imageContext";

const UrlInput = () => {
  const [url, setUrl] = useState<string | null>("");
  const { onAddDownloadToQueue } = useContext(ImageContext);

  const handleImageDownload = async (e: any) => {
    e.preventDefault();

    if (url) {
      onAddDownloadToQueue?.(url);
      e.target.reset();
    } else {
      alert("Empty input");
    }
  };

  return (
    <form onSubmit={handleImageDownload} style={{ margin: ".5rem" }}>
      <label>
        <TextField
          variant="outlined"
          size="small"
          label="Url"
          required
          type="text"
          name="url"
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <Button sx={{ marginLeft: ".5rem" }} type="submit">
        Download
      </Button>
    </form>
  );
};

export default UrlInput;
