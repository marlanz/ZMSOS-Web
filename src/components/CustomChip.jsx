import { Box } from "@mui/material";
// import React from "react";
import { fontFamily } from "../constants/fontFamily";

const CustomChip = ({ px, py, title, bgColor, border, color }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: "10px",
        py: "5px",
        bgcolor: bgColor,
        fontSize: "13px",

        fontWeight: 600,
        color: !color ? "white" : color,
        borderRadius: "15px",
        border: border && border,
      }}
    >
      {title}
    </Box>
  );
};

export default CustomChip;
