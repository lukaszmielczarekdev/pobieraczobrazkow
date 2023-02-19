import { useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import ImageContext from "../../contexts/imageContext";
import { useForm } from "react-hook-form";
import debounce from "../../utils/debounce";

const UrlInput = () => {
  const { onAddDownloadToQueue } = useContext(ImageContext);

  const {
    register: registerImageDownload,
    handleSubmit: handleRegisterImageDownload,
    reset: resetUrl,
  } = useForm({
    defaultValues: {
      url: null,
    },
  });

  const handleImageDownload = async (data: { url: string | null }) => {
    const url = data.url?.trim();

    url && onAddDownloadToQueue?.(url);
    resetUrl();
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleRegisterImageDownload(debounce(handleImageDownload, 300))}
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
        sx={{ width: "100%", background: "rgb(249 250 251)" }}
        autoFocus
        {...registerImageDownload("url", {
          required: true,
          pattern: /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
        })}
      />
      <Button
        sx={{
          mt: "1rem",
          background: "rgb(59,130,246)",
          border: "2px solid white",
          borderRadius: ".5rem",
          color: "white",
          fontWeight: 600,
          padding: ".5rem 1rem",
          "&:hover": {
            background: "rgb(59, 90, 246)",
          },
        }}
        type="submit"
      >
        Download
      </Button>
    </Box>
  );
};

export default UrlInput;
