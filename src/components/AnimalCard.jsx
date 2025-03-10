import { Avatar, Button, Card, Typography } from "@mui/material";
import React from "react";
import CustomBallDivider from "./CustomBallDivider";
import { imgURL } from "../constants/imgURL";
import { fontFamily } from "../constants/fontFamily";
import CustomChip from "./CustomChip";

const AnimalCard = ({
  name,
  type,
  cage,
  age,
  gender,
  weight,
  height,
  arriveDate,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "inline-block",
        p: "20px",
        borderRadius: "15px",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
        width: "340px",
      }}
    >
      <div
        className="card-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className=""
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <Avatar src={imgURL.racoon} sx={{ width: "65px", height: "65px" }} />
          <div className="header-right">
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontSize={16}
              fontWeight={600}
              sx={{ mb: "2px", mt: "5px" }}
            >
              {name}
            </Typography>
            <div
              className="right-secondary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body1"
                color="#666666"
                fontSize={14}
                fontFamily={fontFamily.msr}
              >
                {type}
              </Typography>
              <CustomBallDivider />
              <Typography
                variant="body1"
                color="#666666"
                fontFamily={fontFamily.msr}
                fontSize={14}
              >
                {cage}
              </Typography>
            </div>
          </div>
        </div>
        <CustomChip title={"Healthy"} bgColor={"#10B981"} />
      </div>
      <div className="card-body" style={{ marginTop: "12px" }}>
        <div
          className="age-gender"
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <div
            className="age"
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="#666666"
              fontSize={15}
              fontFamily={fontFamily.msr}
            >
              Age:
            </Typography>
            <Typography
              variant="body1"
              fontFamily={fontFamily.msr}
              fontSize={15}
              color="initial"
              fontWeight={600}
            >
              {age} years
            </Typography>
          </div>
          <div className="gender" style={{ display: "flex", gap: 5 }}>
            <Typography
              variant="body1"
              color="#666666"
              fontSize={15}
              fontFamily={fontFamily.msr}
            >
              Gender:
            </Typography>
            <Typography
              variant="body1"
              fontFamily={fontFamily.msr}
              fontSize={15}
              color="initial"
              fontWeight={600}
            >
              {gender}
            </Typography>
          </div>
        </div>
        <div
          className="weight-height"
          style={{
            display: "flex",
            gap: "30px",
            margin: "15px 0",
          }}
        >
          <div
            className="weight"
            style={{ display: "flex", gap: 5, alignItems: "center" }}
          >
            <Typography
              variant="body1"
              color="#666666"
              fontSize={15}
              fontFamily={fontFamily.msr}
            >
              Weight:
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontSize={15}
              fontFamily={fontFamily.msr}
              fontWeight={600}
            >
              {weight} kg
            </Typography>
          </div>
          <div
            className="height"
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="#666666"
              fontSize={15}
              fontFamily={fontFamily.msr}
            >
              Height:
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontSize={15}
              fontFamily={fontFamily.msr}
              fontWeight={600}
            >
              {height} cm
            </Typography>
          </div>
        </div>
        <div className="arrive-date" style={{ display: "flex", gap: 5 }}>
          <Typography
            variant="body1"
            color="#666666"
            fontSize={15}
            fontFamily={fontFamily.msr}
          >
            Arrive Date:
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            fontSize={15}
            fontFamily={fontFamily.msr}
            fontWeight={600}
          >
            {arriveDate}
          </Typography>
        </div>
      </div>
      <Button
        sx={{
          marginTop: "18px",
          backgroundColor: "#01008A",
          borderRadius: "8px",
          padding: "5px 0",
          width: "100%",
          color: "white",
          fontWeight: 600,
          fontSize: 15,

          textTransform: "none",
        }}
      >
        View Animal
      </Button>
    </Card>
  );
};

export default AnimalCard;
