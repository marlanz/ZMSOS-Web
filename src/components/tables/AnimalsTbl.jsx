import React from "react";
import { animals } from "../../data/animals";
import { Table } from "antd";
import { fontFamily } from "../../constants/fontFamily";
import CustomChip from "../CustomChip";
import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styles } from "../../constants/styles";

const animalStatus = {
  Healthy: {
    bgColor: "#10B981",
    // color: "#1E4620",
  },
  "Under Observation": {
    bgColor: "rgb(77,182,172)",
    // color: "rgb(77,182,172)",
  },
  "Needs check-up": {
    bgColor: "rgb(245, 158, 11)",
    // color: "rgb(245, 158, 11)",
  },
  Quarrantine: {
    bgColor: "rgb(139,92,246)",
    // color: "rgb(139,92,246)",
  },
};

const AnimalsTbl = () => {
  const dataSource = animals
    .filter((a) => a.groupType === "individual")
    .map((a) => ({
      key: a.id,
      name: a.name,
      desc: a.desc,
      species: a.species,
      cage: a.cage,
      age: a.age,
      gender: a.gender,
      weight: a.weight,
      height: a.height,
      arriveDate: a.arriveDate,
      img: a.img,
      status: a.status,
    }));

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Animal Name",
      // width: 220,
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
      title: "Species",
      dataIndex: "species",
      align: "center",
    },
    // {
    //   title: "Cage",
    //   dataIndex: "cage",
    //   align: "center",
    //   render: (_, record) => (
    //     <div className="chip" style={{ cursor: "pointer" }}>
    //       <CustomChip
    //         title={record.cage}
    //         bgColor={"#EEF2FF"}
    //         color={"#312E81"}
    //       />
    //     </div>
    //   ),
    // },

    {
      title: "Age",
      dataIndex: "age",
      align: "center",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <Typography
          variant="body1"
          color="initial"
          fontSize={14}
          fontFamily={fontFamily.msr}
        >
          {record.age} years
        </Typography>
      ),
    },
    {
      title: "Height",
      dataIndex: "height",
      align: "center",
      sorter: (a, b) => b.height - a.height,
      render: (_, record) => (
        <Typography
          variant="body1"
          color="initial"
          fontSize={14}
          fontFamily={fontFamily.msr}
        >
          {record.height} m
        </Typography>
      ),
    },
    {
      title: "Weight",
      dataIndex: "weight",
      align: "center",
      sorter: (a, b) => a.weight - b.weight,
      render: (_, record) => (
        <Typography
          variant="body1"
          color="initial"
          fontSize={14}
          fontFamily={fontFamily.msr}
        >
          {record.weight} kg
        </Typography>
      ),
    },
    {
      title: "Arrival Date",
      dataIndex: "arriveDate",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (_, record) => (
        <CustomChip
          title={record.status}
          bgColor={animalStatus[record.status].bgColor}
          color={"white"}
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
  );
};

export default AnimalsTbl;
