import React from "react";
import { maintenanceTasks } from "../../data/maintenanceSchedules";
import { styles } from "../../constants/styles";
import { Table } from "antd";
import CustomChip from "../CustomChip";
import { fontFamily } from "../../constants/fontFamily";
import { Typography } from "@mui/material";

const MaintenanceScheduleTbl = () => {
  const dataSource = maintenanceTasks.map((c) => ({
    key: c.id,
    time: c.time,
    type: c.type,
    staff: c.staff,
    desc: c.desc,
    note: c.note,
    status: c.status,
    refTime: c.time.split(":"),
  }));

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Maintenance type",
      render: (_, record) => (
        <div className="">
          <Typography
            variant="body1"
            color="initial"
            fontSize={14}
            fontWeight={600}
            fontFamily={fontFamily.msr}
          >
            {record.type}
          </Typography>
          <Typography
            variant="body1"
            color={styles.TEXT_SECONDARY}
            fontSize={13}
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
      ),
    },
    {
      title: "Time",
      align: "center",
      render: (_, record) => (
        <div className="">
          <Typography
            variant="body1"
            color="initial"
            //   fontWeight={600}
            fontFamily={fontFamily.msr}
            fontSize={14}
            textAlign={"center"}
          >
            {record.time}
          </Typography>
          <Typography
            variant="body1"
            color={styles.TEXT_SECONDARY}
            fontFamily={fontFamily.msr}
            fontSize={13}
          >
            {record.refTime[0] < 12
              ? "Morning"
              : record.refTime[0] < 16
              ? "Afternoon"
              : "Evening"}
          </Typography>
        </div>
      ),
    },

    {
      title: "Assigned staff",
      align: "center",
      render: (_, record) => (
        <Typography
          variant="body1"
          color="initial"
          //   fontWeight={600}
          fontFamily={fontFamily.msr}
          fontSize={14}
          textAlign={"center"}
        >
          {record.staff}
        </Typography>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (_, record) => (
        <CustomChip
          title={record.status}
          bgColor={record.status === "Scheduled" ? "#999DA4" : "#10B981"}
          color={"white"}
        />
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 3,
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
  );
};

export default MaintenanceScheduleTbl;
