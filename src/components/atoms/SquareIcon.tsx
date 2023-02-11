import { Box } from "@mui/material";
import { SquareIconProps } from "../../utils/types";

const SquareIcon = ({ bgcolor, children }: SquareIconProps) => {
  return (
    <Box
      sx={{
        background: bgcolor,
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "5px",
        mr: 1,
        padding: ".5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
      }}
    >
      {children}
    </Box>
  );
};

export default SquareIcon;
