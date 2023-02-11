import { useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import ImageContext from "../../contexts/imageContext";

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
    <Box
      component={"form"}
      onSubmit={handleImageDownload}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: ".5rem",
        width: "100%",
        mb: 5,
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        label="Url"
        required
        type="url"
        name="url"
        onChange={(e) => setUrl(e.target.value)}
        sx={{ width: "100%", background: "rgb(249 250 251)" }}
      />
      <Button
        sx={{
          mt: "1rem",
          background: "rgba(59,130,246)",
          border: "2px solid white",
          borderRadius: ".5rem",
          color: "white",
          fontWeight: 600,
          padding: ".5rem 1rem",
        }}
        type="submit"
      >
        Download
      </Button>
    </Box>
  );
};

export default UrlInput;
