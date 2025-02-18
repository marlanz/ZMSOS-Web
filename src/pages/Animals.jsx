import React from "react";
import Typography from "@mui/material/Typography";
import { fontFamily } from "../constants/fontFamily";
import { Button } from "@mui/material";
import CustomDivider from "../components/CustomDivider";
import { pets } from "../data/pets";
import AnimalCard from "../components/AnimalCard";

const Animals = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={24}
          fontFamily={fontFamily.msr}
          fontWeight={600}
        >
          Animals Overview
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
      <CustomDivider />
      <div
        className="animal-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        {pets.map((p, index) => (
          <AnimalCard
            key={index}
            name={p.name}
            type={p.type}
            cage={p.cage}
            age={p.age}
            gender={p.gender}
            weight={p.weight}
            height={p.height}
            arriveDate={p.arriveDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Animals;
