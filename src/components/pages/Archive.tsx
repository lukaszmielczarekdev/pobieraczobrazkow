import { Button } from "@mui/material";
import ArchiveContainer from "../containers/ArchiveContainer";
import ArchiveHeader from "../molecules/ArchiveHeader";
import ArchiveImageGallery from "../organisms/ArchiveImageGallery";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Archive = () => {
  return (
    <ArchiveContainer>
      <ArchiveHeader />
      <ArchiveImageGallery />
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        startIcon={<KeyboardDoubleArrowUpIcon />}
        sx={{
          mt: "1rem",
          background: "rgba(245,115,180)",
          border: "2px solid white",
          borderRadius: ".5rem",
          color: "white",
          fontWeight: 600,
          padding: ".3rem 1rem",
          fontSize: "1rem",
          textTransform: "capitalize",
          "&:hover": {
            background: "rgb(245, 115, 165)",
          },
        }}
      >
        Top
      </Button>
    </ArchiveContainer>
  );
};

export default Archive;
