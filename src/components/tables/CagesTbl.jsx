import { Space, Table } from "antd";
import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import { cages } from "../../data/cages";
import { fontFamily } from "../../constants/fontFamily";
import CustomChip from "../CustomChip";
import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styles } from "../../constants/styles";
import CustomPopover from "../CustomPopover";
import CustomProgressBar from "../CustomProgressBar";
import { otherConstant } from "../../constants/otherConstant";

const CagesTbl = ({ inDetail }) => {
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

  const columnsForDetail = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Cage Name",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={record.img}
            style={{ width: 50, height: 50, borderRadius: "10px" }}
          />
          <div className="">
            <Typography
              variant="body1"
              color="initial"
              fontSize={14}
              fontWeight={600}
              fontFamily={fontFamily.msr}
            >
              {record.name}
            </Typography>
          </div>
        </div>
      ),
    },
    {
      title: "Assigned Team",
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
            gap: 10,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CustomProgressBar
            currentCapacity={record.currentCapacity}
            maxCapacity={record.maxCapacity}
          />
          <div className="number" style={{ fontSize: "14px" }}>
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
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Cage Name",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={record.img}
            alt="animal"
            style={{ width: 50, height: 50, borderRadius: "10px" }}
          />
          <div className="">
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
              color={styles.TEXT_SECONDARY}
              fontSize={14}
              fontFamily={fontFamily.msr}
              sx={{
                width: "250px", // Fixed width
                display: "-webkit-box", // Required for line-clamp
                WebkitBoxOrient: "vertical", // Required for line-clamp
                WebkitLineClamp: 2, // Limit to 2 lines
                overflow: "hidden", // Hide overflow
                textOverflow: "ellipsis", // Add ellipsis for overflow
                whiteSpace: "normal", // Allow text to wrap
              }}
            >
              {record.desc}
            </Typography>
          </div>
        </div>
      ),
    },
    {
      title: "Assigned Team",
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
          <CustomProgressBar
            currentCapacity={record.currentCapacity}
            maxCapacity={record.maxCapacity}
          />
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
      render: (_, record) => (
        <CustomPopover
          status={record.status}
          page={otherConstant.CAGES}
          recordID={record.id}
          viewURL={"/zoo-cages/1"}
        />
      ),
    },
  ];

  return (
    <div className="custom-table-container">
      <Table
        columns={inDetail ? columnsForDetail : columns}
        dataSource={dataSource}
        pagination={{
          pageSize: inDetail ? 6 : 4,
          position: ["bottomRight"],
        }}
        components={{
          body: {
            row: (props) => (
              <tr
                {...props}
                style={{
                  height: styles.TBL_ROW_HEIGHT, // Set the desired row height here
                }}
              />
            ),
          },
        }}
      />
    </div>
  );
};

export default CagesTbl;
