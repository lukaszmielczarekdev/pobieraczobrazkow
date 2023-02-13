import SquareIcon from "../atoms/SquareIcon";
import { Box, Link, Typography } from "@mui/material";
import { DataRowProps } from "../../utils/types";

const DataRow = ({ children, text, mt, bgcolor, link, href }: DataRowProps) => {
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
        <Typography sx={{ fontWeight: 600, opacity: 0.7 }}>{text}</Typography>
      )}
    </Box>
  );
};

export default DataRow;
