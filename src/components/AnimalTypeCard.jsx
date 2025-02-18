import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomBallDivider from "./CustomBallDivider";
import { imgURL } from "../constants/imgURL";
import { fontFamily } from "../constants/fontFamily";
import CustomChip from "./CustomChip";
import AnimalDetail from "./modals/AnimalDetail";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: "20px",
  borderRadius: "10px",
};

const AnimalTypeCard = ({
  img,
  scientificName,
  vietnameseName,
  englishName,
  family,
  weightRange,
  distribution,
  characteristics,
  habitat,
  diet,
  reproduction,
  conservationStatus,
}) => {
  const [openDetail, setOpenDetail] = useState(false);

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const splitContinents = (str) => {
    return str.split(", ");
  };

  const continentsArray = splitContinents(distribution);

  return (
    <Card
      elevation={0}
      sx={{
        width: "380px",
        borderRadius: "15px",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="img" style={{ position: "relative" }}>
        <CardMedia
          src={img}
          sx={{ width: "100%", height: "200px", filter: "brightness(0.8)" }}
          component={"img"}
        />
        <div
          className="chip"
          style={{ position: "absolute", bottom: 10, left: 10 }}
        >
          <CustomChip title={"Endangered"} bgColor={"#E54243"} />
        </div>
      </div>
      <div
        style={{
          //   display: "inline-block",
          padding: "18px",
        }}
      >
        <div className="card-header-text">
          <div
            className="type-name-status"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontSize={16}
              fontWeight={600}
              fontFamily={fontFamily.msr}
            >
              {scientificName}
            </Typography>
          </div>
          <div
            className="vie-eng-name"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <Typography
              variant="body1"
              color="#666666"
              fontSize={14}
              fontFamily={fontFamily.msr}
              fontStyle={"italic"}
              fontWeight={600}
            >
              {englishName}
            </Typography>
            <CustomBallDivider />
            <Typography
              variant="body1"
              color="#666666"
              fontSize={15}
              fontFamily={fontFamily.msr}
              fontWeight={600}
              fontStyle={"italic"}
            >
              {vietnameseName}
            </Typography>
          </div>
        </div>
        <div className="card-body" style={{ marginTop: "18px" }}>
          <div
            className="family-weight"
            style={{
              display: "flex",
              //   justifyContent: "space-between",
              gap: 60,
            }}
          >
            <div className="family">
              <Typography
                variant="body1"
                color="#666666"
                fontSize={15}
                fontFamily={fontFamily.msr}
              >
                Animal Family
              </Typography>
              <Typography
                variant="body1"
                fontFamily={fontFamily.msr}
                fontSize={15}
                color="initial"
                fontWeight={600}
              >
                {family}
              </Typography>
            </div>
            <div className="weight">
              <Typography
                variant="body1"
                color="#666666"
                fontSize={15}
                fontFamily={fontFamily.msr}
              >
                Weight Range
              </Typography>
              <Typography
                variant="body1"
                fontFamily={fontFamily.msr}
                fontSize={15}
                color="initial"
                fontWeight={600}
                //   sx={{ marginTop: "2px" }}
              >
                {weightRange} kg
              </Typography>
            </div>
          </div>
          <div className="animal-distribution" style={{ marginTop: "10px" }}>
            <Typography
              variant="body1"
              color="#666666"
              fontSize={15}
              fontFamily={fontFamily.msr}
            >
              Animal Distribution
            </Typography>
            <div
              className=""
              style={{
                marginTop: "5px",
                display: "flex",
                flexWrap: "wrap",
                //   justifyContent: "space-between",
                gap: 10,
              }}
            >
              {continentsArray.map((c, index) => {
                // Check if the length of the array is greater than 2
                if (continentsArray.length > 2 && index >= 2) {
                  // Replace the title with +1, +2, etc., based on the index
                  const incrementValue = index - 1;
                  return (
                    <CustomChip
                      key={index}
                      title={`+${incrementValue}`}
                      border={"1.5px solid black"}
                      color={"black"}
                    />
                  );
                }
                // Otherwise, render the original title
                return (
                  <CustomChip
                    key={index}
                    title={c}
                    border={"1.5px solid black"}
                    color={"black"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Button
          onClick={() => handleOpenDetail()}
          sx={{
            marginTop: "25px",
            backgroundColor: "#01008A",
            borderRadius: "8px",
            padding: "5px 0",
            color: "white",
            fontWeight: 600,
            fontSize: 15,
            fontFamily: fontFamily.msr,
            textTransform: "none",
            width: "100%",
          }}
        >
          View type
        </Button>
      </div>
      <AnimalDetail
        open={openDetail}
        handleClose={handleCloseDetail}
        handleOpen={handleOpenDetail}
      />
    </Card>
  );
};

export default AnimalTypeCard;
