import { CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalProps } from "../../utils/interfaces";
import Placeholder from "../../assets/images/imagePlaceholder.png";
import { Cancel } from "@mui/icons-material";

const ImageModal = ({ image, isOpen, handleOpen }: ModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "fit-content" },
          maxWidth: "90%",
          height: "fit-content",
          maxHeight: "90%",
          bgcolor: "background.paper",
          borderRadius: "15px",
          boxShadow: 24,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            borderRadius: "15px",
            objectFit: "contain",
          }}
          image={image ? image : Placeholder}
          alt={
            image
              ? "Downloaded image"
              : "Black outline of photo camera on white background"
          }
        />
        <Cancel
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            opacity: "0.8",
            background: "white",
            borderRadius: "50%",
          }}
          onClick={handleOpen}
        />
      </Box>
    </Modal>
  );
};

export default ImageModal;
