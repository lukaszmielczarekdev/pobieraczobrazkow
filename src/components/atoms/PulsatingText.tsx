import { Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { PulsatingTextProps } from "../../utils/interfaces";

const pulse = keyframes`
  0% { opacity: .5; }
  50% { opacity: 1; }
  100% { opacity: .5; }
`;

const PulsatingText = ({ text }: PulsatingTextProps) => {
  return (
    <Typography
      component={"span"}
      sx={{
        fontSize: "inherit",
        fontWeight: 900,
        lineHeight: 1.2,
        textAlign: "center",
        display: "inline-block",
        m: "0 .6rem",
        animation: `${pulse} 3s cubic-bezier(.4,0,.6,1) infinite`,
      }}
    >
      {text}
    </Typography>
  );
};

export default PulsatingText;
