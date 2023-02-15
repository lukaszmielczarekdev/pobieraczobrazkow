import { memo, useContext, useEffect, useState } from "react";
import ImageContext from "../../contexts/imageContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, CardActions, Skeleton } from "@mui/material";
import Placeholder from "../../assets/images/imagePlaceholder.png";
import { ImageCardProps } from "../../utils/types";
import { Image } from "../../utils/interfaces";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import StorageIcon from "@mui/icons-material/Storage";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import SyncIcon from "@mui/icons-material/Sync";
import DataRow from "../molecules/DataRow";
import ImageModal from "../molecules/ImageModal";
import download from "downloadjs";

const ImageCard = ({ id }: ImageCardProps) => {
  const { imagesInfo, onGetImage } = useContext(ImageContext);
  const [imageInfo, setImageInfo] = useState<Image | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleGetDetails = () => {
    setLoading(true);
    const getImageInfo = async () => {
      await onGetImage?.(id);
      setLoading(false);
    };

    getImageInfo();
  };

  useEffect(() => {
    const image = imagesInfo.find((image) => image._id === id);
    image && setImageInfo(image);
  }, [id, imagesInfo]);

  return (
    <>
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{
            marginLeft: ".5rem",
            marginRight: ".5rem",
            maxWidth: 300,
            height: 408,
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
          }}
        />
      ) : (
        <Card
          sx={{
            marginLeft: ".5rem",
            marginRight: ".5rem",
            maxWidth: 300,
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 200,
              borderRadius: "15px",
              padding: ".5rem",
              objectFit: imageInfo?.file ? "cover" : "contain",
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
              <CardContent sx={{ display: "block", flexWrap: "wrap" }}>
                <DataRow bgcolor={"rgb(196 181 253)"} text={imageInfo?.addDate}>
                  <AddIcon
                    sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </DataRow>
                <DataRow
                  bgcolor={"rgb(249 168 212)"}
                  text={imageInfo?.downloadDate}
                  mt={1}
                >
                  <FileDownloadDoneIcon
                    sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
                  />
                </DataRow>
                <DataRow
                  bgcolor={"rgb(134 239 172)"}
                  text={"Source"}
                  mt={1}
                  link
                  href={imageInfo?.sourceUrl}
                >
                  <CropOriginalIcon
                    sx={{
                      color: "white",
                      stroke: "#ffffff",
                      strokeWidth: 1,
                      fontSize: "1.2rem",
                    }}
                  />
                </DataRow>
                <DataRow
                  bgcolor={"rgb(196 181 253)"}
                  text={"Backup"}
                  mt={1}
                  onClick={handleOpen}
                >
                  <StorageIcon
                    sx={{
                      color: "white",
                      stroke: "#ffffff",
                      strokeWidth: 1,
                      fontSize: "1rem",
                    }}
                  />
                </DataRow>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => download(imageInfo?.file, imageInfo._id)}
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
                height: 208,
              }}
            >
              <Button startIcon={<SyncIcon />} onClick={handleGetDetails}>
                Get details
              </Button>
            </Box>
          )}
        </Card>
      )}
      <ImageModal
        image={imageInfo?.file}
        isOpen={open}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default memo(ImageCard);
