import { Table } from "antd";

import { types } from "../../data/types";
import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomChip from "../CustomChip";
import { fontFamily } from "../../constants/fontFamily";

const AnimalTypesTbl = () => {
  const dataSource = types.map((type) => ({
    key: type.id,
    img: type.img,
    scientificName: type.scientificName,
    vietnameseName: type.vietnameseName,
    englishName: type.englishName,
    family: type.family,
    weightRange: type.weightRange,
    characteristics: type.characteristics,
    distribution: type.distribution,
    habitat: type.habitat,
    diet: type.diet,
    reproduction: type.reproduction,
    conservationStatus: type.conservationStatus,
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
      title: "Scientific Name",
      // dataIndex: "scientificName",
      render: (_, record) => (
        <div>
          <Typography
            variant="body1"
            color="initial"
            fontSize={15}
            fontWeight={600}
            fontFamily={fontFamily.msr}
          >
            {record.scientificName}
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
            {record.characteristics}
          </Typography>
        </div>
      ),
    },
    {
      title: "Vietnamese Name",
      dataIndex: "vietnameseName",
    },
    {
      title: "English Name",
      dataIndex: "englishName",
    },
    {
      title: "Family",
      dataIndex: "family",
    },
    {
      title: "Weight Range",
      dataIndex: "weightRange",
      width: 170,
      render: (_, record) => (
        <CustomChip
          title={`${record.weightRange[0]} kg - ${record.weightRange[1]} kg`}
          bgColor={"#EEF2FF"}
          color={"#312E81"}
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
    />
  );
};

export default AnimalTypesTbl;
