import React, { useEffect, useState } from "react";
import { area } from "../../data/area";
import { FreeBreakfast } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Table } from "antd";
import CustomChip from "../CustomChip";
import { fontFamily } from "../../constants/fontFamily";
import NavigationIcon from "@mui/icons-material/Navigation";
import { styles } from "../../constants/styles";
import CustomPopover from "../CustomPopover";
import { otherConstant } from "../../constants/otherConstant";
import { getAllAreas } from "../../api/area";

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
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const data = await getAllAreas();
        setAreas(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAreas();
  }, []);

  const dataSource = areas.map((a) => ({
    key: a.id,
    img: a?.urlImages?.[0],
    name: a?.name,
    desc: a?.description,
    direction: a?.location,
    // maxOccupancy: a.maxOccupancy,
    // currentOccupancy: a.currentOccupancy,
    species: a?.animalOrder,
    // speciesList: a.speciesList,
    status: a?.status?.name,
  }));

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Area Name",
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
            fontSize="small"
          />
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontSize={14}
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
      render: (_, record) => (
        <CustomPopover
          status={record.status}
          page={otherConstant.AREA}
          recordID={record.id}
          viewURL={"/areas/1"}
        />
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

export default AreaTbl;
