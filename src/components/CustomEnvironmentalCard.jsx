import { Typography } from "@mui/material";
import React from "react";
import CustomChip from "./CustomChip";
import { fontFamily } from "../constants/fontFamily";

const CustomEnvironmentalCard = ({
  icon,
  title,
  value,
  lastChecked,
  status,
}) => {
  return (
    <div
      className="temp"
      style={{ display: "flex", alignItems: "center", gap: "15px" }}
    >
      <div
        className="icon"
        style={{
          padding: "10px",
          backgroundColor: "#F9FAFB",
          borderRadius: "10px",
        }}
      >
        {icon}
      </div>
      <div className="text">
        <Typography
          variant="body1"
          color="initial"
          fontFamily={fontFamily.msr}
          fontSize={14}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          fontFamily={fontFamily.msr}
          fontSize={15}
          fontWeight={600}
          sx={{ marginTop: "5px" }}
        >
          {value}
        </Typography>
        {/* <Typography
          variant="body1"
          color="initial"
          fontFamily={fontFamily.msr}
          fontSize={14}
          sx={{ mt: "6px", mb: "8px" }}
        >
          Last checked:
          <br /> {lastChecked}
        </Typography>
        <CustomChip title={"Normal"} bgColor={"#10B981"} /> */}
      </div>
    </div>
  );
};

export default CustomEnvironmentalCard;
