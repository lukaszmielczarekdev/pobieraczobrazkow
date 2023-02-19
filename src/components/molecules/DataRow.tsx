import SquareIcon from "../atoms/SquareIcon";
import { Box, Link, Typography } from "@mui/material";
import { DataRowProps } from "../../utils/interfaces";

const DataRow = ({
  children,
  text,
  mt,
  bgcolor,
  link,
  href,
  onClick,
}: DataRowProps) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", mt: mt ? mt : 0 }}>
      <SquareIcon bgcolor={bgcolor}>{children}</SquareIcon>
      {link ? (
        <Link
          target="_blank"
          href={href}
          sx={{ textDecoration: "none", fontWeight: 600 }}
        >
          {text}
        </Link>
      ) : (
        <Typography
          onClick={onClick}
          sx={{
            fontWeight: 600,
            opacity: 0.7,
            cursor: onClick ? "pointer" : "normal",
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default DataRow;
