import { Space, Table } from "antd";
import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import { cages } from "../../data/cages";
import { fontFamily } from "../../constants/fontFamily";
import CustomChip from "../CustomChip";
import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styles } from "../../constants/styles";

const CagesTbl = () => {
  const dataSource = cages.map((c) => ({
    key: c.id,
    name: c.name,
    desc: c.desc,
    currentTeam: c.currentTeam,
    status: c.status,
    maxCapacity: c.maxCapacity,
    currentCapacity: c.currentCapacity,
    area: c.area,
    img: c.imgURL,
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
      title: "Cage Name",
      render: (_, record) => (
        <div>
          <Typography
            variant="body1"
            color="initial"
            fontSize={15}
            fontWeight={600}
            fontFamily={fontFamily.msr}
          >
            {record.name}
          </Typography>
          <Typography
            variant="body1"
            color="##6B7280"
            fontSize={14}
            fontFamily={fontFamily.msr}
            sx={{
              width: "250px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {record.desc}
          </Typography>
        </div>
      ),
    },
    {
      title: "Current Team",
      dataIndex: "currentTeam",
      align: "center",
      render: (_, record) => (
        <>
          {record.currentTeam === "" ? (
            "N/A"
          ) : (
            <div className="chip" style={{ cursor: "pointer" }}>
              <CustomChip
                title={record.currentTeam}
                bgColor={"#EEF2FF"}
                color={"#312E81"}
              />
            </div>
          )}
        </>
      ),
    },
    {
      title: "Area",
      dataIndex: "area",
      align: "center",
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
                width: record.currentCapacity
                  ? `${(record.currentCapacity / record.maxCapacity) * 100}%`
                  : 0,
                backgroundColor: "#103559",
                height: "100%",
                borderRadius: "10px",
              }}
            ></div>
          </div>
          <div className="number">
            {record.currentCapacity}/{record.maxCapacity}
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

export default CagesTbl;
