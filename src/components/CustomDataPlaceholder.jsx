import { Typography } from "@mui/material";
import React from "react";
import { fontFamily } from "../constants/fontFamily";

const CustomDataPlaceholder = ({ name, value }) => {
  return (
    <div
      className="custom-data-placeholder"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // width: "100%",
        // flexDirection: "column",
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        fontFamily={fontFamily.msr}
        fontSize={14}
      >
        {name}:
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        fontFamily={fontFamily.msr}
        fontSize={14}
        fontWeight={600}
      >
        {value}
      </Typography>
    </div>
  );
};

export default CustomDataPlaceholder;
