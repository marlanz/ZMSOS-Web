import React from "react";
import Typography from "@mui/material/Typography";
import { fontFamily } from "../constants/fontFamily";
import { Button } from "@mui/material";
import AnimalsTbl from "../components/tables/AnimalsTbl";

const Animals = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={24}
          fontFamily={fontFamily.msr}
          fontWeight={600}
        >
          Animals
        </Typography>
        <Button
          sx={{
            fontSize: 15,
            fontFamily: fontFamily.msr,
            textTransform: "none",
            color: "white",
            backgroundColor: "#01008A",
            borderRadius: "8px",
            padding: "12px 20px",
            fontWeight: 600,
          }}
        >
          Create Animal
        </Button>
      </div>
      <AnimalsTbl />
    </div>
  );
};

export default Animals;
