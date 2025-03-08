import {
  Autocomplete,
  Button,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CustomChip from "../components/CustomChip";
import { fontFamily } from "../constants/fontFamily";
import { imgURL } from "../constants/imgURL";
import CustomDataPlaceholder from "../components/CustomDataPlaceholder";
import CustomEnvironmentalCard from "../components/CustomEnvironmentalCard";
import StraightenIcon from "@mui/icons-material/Straighten";
import FenceIcon from "@mui/icons-material/Fence";
import HandymanIcon from "@mui/icons-material/Handyman";
import SpaIcon from "@mui/icons-material/Spa";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LightModeIcon from "@mui/icons-material/LightMode";
import AirIcon from "@mui/icons-material/Air";
import { animals } from "../data/animals";
import { styles } from "../constants/styles";
import { Table } from "antd";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FilterListIcon from "@mui/icons-material/FilterList";
import CustomProgressBar from "../components/CustomProgressBar";
import { useNavigate } from "react-router-dom";
import FeedingScheduleTbl from "../components/tables/FeedingScheduleTbl";
import MaintenanceScheduleTbl from "../components/tables/MaintenanceScheduleTbl";

const animalStatus = {
  Healthy: {
    bgColor: "#10B981",
    // color: "#1E4620",
  },
  "In Observation": {
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

const teams = [
  {
    name: "Emma Thompson",
    role: "Primary Keeper",
    contact: "555-0104",
  },
  {
    name: "Emma Thompson",
    role: "Primary Keeper",
    contact: "555-0104",
  },
  {
    name: "Emma Thompson",
    role: "Primary Keeper",
    contact: "555-0104",
  },
];

const features = [
  "Heated floor",
  "Climbing structures",
  "Water feature",
  "Viewing windows",
  "Night shelter",
];

const CageDetail = () => {
  const navigate = useNavigate();

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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={record.img}
            alt="animal"
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
      title: "Species",
      dataIndex: "species",
      align: "center",
    },

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
  ];
  return (
    <div style={{}}>
      <div className="back-button">
        <Button
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            fontFamily: fontFamily.msr,
            textDecoration: "underline",
            textTransform: "none",
            gap: "8px",
          }}
          onClick={() => {
            navigate("/zoo-cages");
          }}
        >
          <ArrowBackIosNewIcon fontSize="16px" />
          Back to Cage List
        </Button>
      </div>
      <div
        className="detail-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div className="cage-tbl-data" style={{ width: "370px" }}>
          <div
            className="id-status"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontWeight={600}
              fontSize={14}
            >
              ID: 1
            </Typography>
            <CustomChip title={"Open"} bgColor={"#E6F4EA"} color={"#1E4620"} />
          </div>
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontWeight={600}
            fontSize={20}
          >
            Lion Enclosure
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontSize={15}
            sx={{ marginTop: "5px" }}
          >
            Open-air habitat with rocky terrain for lions.
          </Typography>
          <div className="img-list" style={{ marginTop: "10px" }}>
            <CardMedia
              component={"img"}
              src={imgURL.area}
              sx={{ width: "100%", height: "250px", borderRadius: "8px" }}
            />
          </div>
          <div
            className="key-information"
            style={{
              marginTop: "25px",
              padding: "20px",
              backgroundColor: "#F9FAFB",
              borderRadius: "8px",
            }}
          >
            <div
              className="header"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FenceIcon />
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontSize={16}
                fontWeight={600}
              >
                Key Information
              </Typography>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginTop: "20px",
              }}
            >
              <CustomDataPlaceholder name={"ID"} value={"CAGE-01"} />
              <CustomDataPlaceholder
                name={"Cage Name"}
                value={"Lion Enclosure"}
              />

              <CustomDataPlaceholder
                name={"Assigned Team"}
                value={"Big Cat Care Team"}
              />
              <CustomDataPlaceholder name={"Area"} value={"Savana Zones"} />
              <CustomDataPlaceholder
                name={"Status"}
                value={
                  <CustomChip
                    title={"Open"}
                    bgColor={"#E6F4EA"}
                    color={"#1E4620"}
                  />
                }
              />
              <div className="occupancy">
                <CustomDataPlaceholder name={"Occupancy"} value={"2/10"} />
                <CustomProgressBar
                  currentCapacity={2}
                  maxCapacity={10}
                  width={"100%"}
                  mt={"10px"}
                />
              </div>
            </div>
          </div>
          <div
            className="size-information"
            style={{
              marginTop: "25px",
              padding: "20px",
              backgroundColor: "#F9FAFB",
              borderRadius: "8px",
            }}
          >
            <div
              className="header"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <StraightenIcon />
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontSize={16}
                fontWeight={600}
              >
                Size Information
              </Typography>
            </div>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginTop: "20px",
              }}
            >
              <CustomDataPlaceholder name={"Total Size"} value={"120m²"} />
              <CustomDataPlaceholder name={"Indoor Size"} value={"40m²"} />
              <CustomDataPlaceholder name={"Outdoor Size"} value={"80m²"} />
              <CustomDataPlaceholder name={"Height"} value={"4m"} />
            </div>
          </div>
          <div
            className="size-information"
            style={{
              marginTop: "25px",
              padding: "20px",
              backgroundColor: "#F9FAFB",
              borderRadius: "8px",
            }}
          >
            <div
              className="header"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <HandymanIcon />
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontSize={16}
                fontWeight={600}
              >
                Maintenance
              </Typography>
            </div>

            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <CustomDataPlaceholder
                name={"Last Cleaned"}
                value={"2024-03-15"}
              />
              <CustomDataPlaceholder
                name={"Next Cleaning"}
                value={"2024-03-22"}
              />
            </div>
          </div>

          <Button
            sx={{
              fontSize: 15,
              fontFamily: fontFamily.msr,
              textTransform: "none",
              color: "white",
              backgroundColor: "#01008A",
              borderRadius: "8px",
              padding: "8px 0px",
              fontWeight: 600,
              width: "100%",
              marginTop: "30px",
            }}
          >
            Edit Cage
          </Button>
          <Button
            sx={{
              fontSize: 15,
              fontFamily: fontFamily.msr,
              textTransform: "none",
              color: "#01008A",
              border: "1px solid #01008A",
              borderRadius: "8px",
              padding: "8px 0px",
              fontWeight: 600,
              width: "100%",
              marginTop: "15px",
            }}
          >
            View History
          </Button>
        </div>
        <div
          className="cage-other-date"
          // style={{ width: "calc(100% - 400px)" }}
        >
          {/* <div className="environment-monitoring">
            <div className="">
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontSize={16}
                fontWeight={600}
              >
                Environment Monitoring
              </Typography>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <CustomEnvironmentalCard
                icon={<ThermostatIcon />}
                title={"Temperature"}
                value={"20°C - 35°C"}
                lastChecked={"2024-03-14"}
                status={"Normal"}
              />
              <CustomEnvironmentalCard
                icon={<WaterDropIcon />}
                title={"Humidity"}
                value={"30% - 50%"}
                lastChecked={"2024-03-14"}
                status={"Normal"}
              />
              <CustomEnvironmentalCard
                icon={<LightModeIcon />}
                title={"Lighting Schedule"}
                value={"6:00 AM - 8:00 PM"}
                lastChecked={"2024-03-14"}
                status={"Normal"}
              />
              <CustomEnvironmentalCard
                icon={<AirIcon />}
                title={"Ventilation"}
                value={
                  <CustomChip
                    title={"Normal"}
                    bgColor={"#10B981"}
                    color={"white"}
                  />
                }
                // lastChecked={"2024-03-14"}
                // status={"Normal"}
              />
            </div>
          </div> */}
          <div
            className="current-animals"
            style={{
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontSize={17}
              fontWeight={600}
            >
              Current Animals
            </Typography>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
                justifyContent: "space-between",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <Autocomplete
                  disablePortal
                  options={animals}
                  sx={{ width: 400 }}
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option) => (
                    <Typography
                      variant="body1"
                      color="initial"
                      {...props}
                      fontFamily={fontFamily.msr}
                    >
                      {option.name}
                    </Typography>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Animal name"
                      placeholder="Search for an animal name"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px", // Adjust the border radius value as needed
                        },
                        // width: "500px",
                        "& .MuiInputBase-input": {
                          fontFamily: fontFamily.msr, // Replace with your desired font family
                        },
                        "& .MuiInputLabel-root": {
                          fontFamily: fontFamily.msr, // Replace with your desired font family
                        },
                      }}
                    />
                  )}
                />
                <Button
                  sx={{
                    fontSize: 15,
                    fontFamily: fontFamily.msr,
                    textTransform: "none",
                    border: "1px solid #01008A",
                    color: "#01008A",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FilterListIcon />
                  Filter
                </Button>
              </div>
              <Button
                sx={{
                  fontSize: 15,
                  fontFamily: fontFamily.msr,
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#01008A",
                  borderRadius: "8px",
                  padding: "12px 20px",
                  fontWeight: 600,
                }}
              >
                Add Animal
              </Button>
            </div>
            <div className="table" style={{ marginTop: " 15px" }}>
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{
                  pageSize: 3,
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
          </div>

          <div
            className="feeding-schedule"
            style={{
              marginTop: "30px",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontSize={16}
              fontWeight={600}
              sx={{ mb: "20px" }}
            >
              Feeding Schedule
            </Typography>
            <FeedingScheduleTbl />
          </div>
          <div
            className="up-coming-maintenance"
            style={{
              marginTop: "30px",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontSize={16}
              fontWeight={600}
              sx={{ mb: "20px" }}
            >
              Upcoming Maintenance
            </Typography>
            <MaintenanceScheduleTbl />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CageDetail;
