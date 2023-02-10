import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImageContext from "../contexts/imageContext";
import { Image } from "../utils/interfaces";
import { Button, Link } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  imageUrl: string | null;
  isOpen: boolean;
  handleOpen: () => void;
};

const ImageInfoModal = ({ imageUrl, isOpen, handleOpen }: ModalProps) => {
  const { onGetImage } = useContext(ImageContext);
  const [imageInfo, setImageInfo] = useState<Image | null>(null);

  useEffect(() => {
    if (imageUrl) {
      const getImageInfo = async () => {
        const imageId = imageUrl.slice(
          imageUrl.lastIndexOf("/") + 1,
          imageUrl.lastIndexOf(".")
        );

        const response = await onGetImage?.(imageId);
        response && setImageInfo(response);
      };
      getImageInfo();
    }
  }, [imageUrl, onGetImage]);

  return (
    <Modal
      open={isOpen}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Image info:
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Added: {imageInfo?.addDate}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Downloaded: {imageInfo?.downloadDate}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Link href={imageInfo?.sourceUrl}>Original source</Link>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Link href={imageUrl ? imageUrl : ""}>Backup</Link>
        </Typography>
        <Button sx={{ mt: 3 }} onClick={handleOpen}>
          Go back
        </Button>
      </Box>
    </Modal>
  );
};

export default ImageInfoModal;
