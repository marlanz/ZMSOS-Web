import { Table } from "antd";

import { IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomChip from "../CustomChip";
import { fontFamily } from "../../constants/fontFamily";
import { styles } from "../../constants/styles";
import PropTypes from "prop-types";

const AnimalTypesTbl = ({ animalTypes, loading }) => {
  const dataSource = animalTypes.map((type) => ({
    key: type.id,
    img: type.urlImage,
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
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Scientific Name",
      // dataIndex: "scientificName",
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
              {record.scientificName}
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
              {record.characteristics}
            </Typography>
          </div>
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
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 4,
      }}
    />
  );
};
AnimalTypesTbl.propTypes = {
  animalTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      urlImage: PropTypes.string,
      scientificName: PropTypes.string.isRequired,
      vietnameseName: PropTypes.string,
      englishName: PropTypes.string,
      family: PropTypes.string,
      weightRange: PropTypes.arrayOf(PropTypes.number),
      characteristics: PropTypes.string,
      distribution: PropTypes.string,
      habitat: PropTypes.string,
      diet: PropTypes.string,
      reproduction: PropTypes.string,
      conservationStatus: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AnimalTypesTbl;
