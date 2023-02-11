import { useContext, useState } from "react";
import ImageContext from "../../contexts/imageContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  CardActions,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import Placeholder from "../../assets/images/imagePlaceholder.png";
import { ImageCardProps } from "../../utils/types";
import { Image } from "../../utils/interfaces";
import SquareIcon from "../atoms/SquareIcon";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import StorageIcon from "@mui/icons-material/Storage";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import SyncIcon from "@mui/icons-material/Sync";

const ImageCard = ({ url }: ImageCardProps) => {
  const { onGetImage } = useContext(ImageContext);
  const [imageInfo, setImageInfo] = useState<Image | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetDetails = () => {
    setLoading(true);

    const getImageInfo = async () => {
      const imageId = url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."));

      const response = await onGetImage?.(imageId);
      response && setImageInfo(response);
      setLoading(false);
    };

    getImageInfo();
  };

  return (
    <>
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: 200 },
            height: { xs: "100%", sm: 408 },
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
          }}
        />
      ) : (
        <Card
          sx={{
            width: { xs: "100%", sm: 200 },
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: { xs: "100%", sm: 200 },
              borderRadius: "15px",
              padding: ".5rem",
            }}
            image={imageInfo?.file ? imageInfo.file : Placeholder}
            alt={
              imageInfo?.file
                ? "Downloaded image"
                : "Black outline of photo camera on white background"
            }
          />
          {imageInfo ? (
            <Box>
              <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <SquareIcon bgcolor={"rgb(196 181 253)"}>
                    <AddIcon
                      sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
                    />
                  </SquareIcon>
                  <Typography sx={{ fontWeight: 600, opacity: 0.7 }}>
                    {imageInfo?.addDate}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                  <SquareIcon bgcolor={"rgb(249 168 212)"}>
                    <FileDownloadDoneIcon
                      sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
                    />
                  </SquareIcon>
                  <Typography sx={{ fontWeight: 600, opacity: 0.7 }}>
                    {imageInfo?.downloadDate}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                  <SquareIcon bgcolor={"rgb(134 239 172)"}>
                    <CropOriginalIcon
                      sx={{
                        color: "white",
                        stroke: "#ffffff",
                        strokeWidth: 1,
                        fontSize: "1.2rem",
                      }}
                    />
                  </SquareIcon>
                  <Link
                    target="_blank"
                    href={imageInfo?.sourceUrl}
                    sx={{ textDecoration: "none", fontWeight: 600 }}
                  >
                    Source
                  </Link>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                  <SquareIcon bgcolor={"rgb(196 181 253)"}>
                    <StorageIcon
                      sx={{
                        color: "white",
                        stroke: "#ffffff",
                        strokeWidth: 1,
                        fontSize: "1rem",
                      }}
                    />
                  </SquareIcon>
                  <Link
                    target="_blank"
                    href={url ? url : ""}
                    sx={{ textDecoration: "none", fontWeight: 600 }}
                  >
                    Backup
                  </Link>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<DownloadIcon />}
                  size="small"
                  variant="outlined"
                  sx={{
                    border: "1px solid white",
                    borderRadius: ".5rem",
                    fontWeight: 600,
                    padding: ".5rem 1rem",
                    background: "rgb(249 250 251)",
                    width: "100%",
                  }}
                >
                  Save
                </Button>
              </CardActions>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "100%", sm: 208 },
              }}
            >
              <Button startIcon={<SyncIcon />} onClick={handleGetDetails}>
                Get details
              </Button>
            </Box>
          )}
        </Card>
      )}
    </>
  );
};

export default ImageCard;
