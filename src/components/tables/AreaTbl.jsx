import React from "react";
import { area } from "../../data/area";
import { FreeBreakfast } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Table } from "antd";
import CustomChip from "../CustomChip";
import { fontFamily } from "../../constants/fontFamily";
import NavigationIcon from "@mui/icons-material/Navigation";
import { styles } from "../../constants/styles";

const directionToRotation = {
  North: 0,
  NorthEast: 45,
  East: 90,
  SouthEast: 135,
  South: 180,
  SouthWest: 225,
  West: 270,
  NorthWest: 315,
};

const AreaTbl = () => {
  const dataSource = area.map((a) => ({
    key: a.id,
    img: a.imgURL,
    name: a.name,
    desc: a.desc,
    direction: a.direction,
    maxOccupancy: a.maxOccupancy,
    currentOccupancy: a.currentOccupancy,
    species: a.species,
    speciesList: a.speciesList,
    status: a.status,
  }));

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      align: "center",
      render: (img) => (
        <img
          src={img}
          alt="animal"
          style={{ width: 70, height: 60, borderRadius: "10px" }}
        />
      ),
      width: 100,
    },
    {
      title: "Area Name",
      render: (_, record) => (
        <div>
          <Typography
            variant="body1"
            color="initial"
            fontSize={15}
            fontFamily={fontFamily.msr}
            fontWeight={600}
          >
            {record.name}
          </Typography>
          <Typography
            variant="body1"
            color="##6B7280"
            fontSize={14}
            fontFamily={fontFamily.msr}
          >
            {record.desc}
          </Typography>
        </div>
      ),
    },
    {
      title: "Direction",
      dataIndex: "direction",
      align: "center",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NavigationIcon
            style={{
              transform: `rotate(${directionToRotation[record.direction]}deg)`,
              transition: "transform 0.3s",
            }}
          />
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontSize={15}
            style={{ marginLeft: 8 }}
          >
            {record.direction}
          </Typography>
        </div>
      ),
    },
    {
      title: "Species",
      // dataIndex: "species",
      align: "center",
      render: (_, record) => (
        <CustomChip
          title={`${record.species} species`}
          bgColor={"#EEF2FF"}
          color={"#312E81"}
        />
      ),
    },

    {
      title: "Occupancy",
      dataIndex: "",
      align: "center",
      width: 200,
      render: (_, record) => (
        <div
          className="bar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            justifyContent: "center",
          }}
        >
          <div
            className="progress-bar"
            style={{
              width: "50px",
              height: "7px",
              backgroundColor: "#e5e7eb",
              marginLeft: "15px",
              borderRadius: "10px",
            }}
          >
            <div
              className="progress"
              style={{
                width: record.currentOccupancy
                  ? `${(record.currentOccupancy / record.maxOccupancy) * 100}%`
                  : 0,
                backgroundColor: "#103559",
                height: "100%",
                borderRadius: "10px",
              }}
            ></div>
          </div>
          <div className="number">
            {record.currentOccupancy}/{record.maxOccupancy}
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (_, record) => (
        <CustomChip
          title={record.status}
          bgColor={record.status === "Open" ? "#E6F4EA" : "#FEEAE6"}
          color={record.status === "Open" ? "#1E4620" : "#8C1D18"}
        />
      ),
    },

    {
      title: "Action",
      dataIndex: "",
      align: "center",
      render: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 4,
      }}
      components={{
        body: {
          row: (props) => (
            <tr
              {...props}
              style={
                {
                  // height: styles.TBL_ROW_HEIGHT, // Set the desired row height here
                }
              }
            />
          ),
        },
      }}
    />
  );
};

export default AreaTbl;
