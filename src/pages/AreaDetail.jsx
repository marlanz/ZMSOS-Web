import {
  Autocomplete,
  Button,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import FeedingScheduleTbl from "../components/tables/FeedingScheduleTbl";
import MaintenanceScheduleTbl from "../components/tables/MaintenanceScheduleTbl";
import { cages } from "../data/cages";
import CagesTbl from "../components/tables/CagesTbl";
import axios from "axios";
import { BASE_URL } from "../constants/otherConstant";

const areaStatus = {
  Open: {
    bgColor: "rgb(16,185,129,0.08)",
    color: "#0CA270",
  },

  Close: {
    bgColor: "rgb(153,157,164,0.1)",
    color: "#727272",
  },
};

const AreaDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [area, setArea] = useState({});

  const [cages, setCages] = useState([]);

  useEffect(() => {
    const fetchCages = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/Cage/cages/zooAreaId?zooAreaId=${id}`
        );
        if (response.status === 200) {
          setCages(response.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchAreaDetail = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/ZooArea/zooArea/id?id=${id}`
        );
        if (response.status === 200) {
          setArea(response.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAreaDetail();
    fetchCages();
  }, [id]);

  return (
    <div style={{}}>
      <div className="back-button">
        <Button
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",

            textDecoration: "underline",
            textTransform: "none",
            gap: "8px",
          }}
          onClick={() => {
            navigate("/areas");
          }}
        >
          <ArrowBackIosNewIcon fontSize="16px" />
          Back to Area List
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
              ID: {id}
            </Typography>
            <CustomChip
              title={area.status?.name}
              bgColor={areaStatus[area.status?.name]?.bgColor}
              color={areaStatus[area.status?.name]?.color}
            />
          </div>
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontWeight={600}
            fontSize={20}
          >
            {area?.name}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontSize={15}
            sx={{ marginTop: "5px" }}
          >
            {area?.description}
          </Typography>
          <div className="img-list" style={{ marginTop: "10px" }}>
            <CardMedia
              component={"img"}
              src={area?.urlImages?.[0]}
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
              <CustomDataPlaceholder name={"ID"} value={id} />
              <CustomDataPlaceholder name={"Area Name"} value={area?.name} />

              <CustomDataPlaceholder
                name={"Direction"}
                value={area?.location}
              />
              <CustomDataPlaceholder
                name={"Species Count"}
                value={"5 species"}
              />

              <CustomDataPlaceholder
                name={"Total Area"}
                value={`${area?.size}m²`}
              />
              <CustomDataPlaceholder
                name={"Status"}
                value={
                  <CustomChip
                    title={area.status?.name}
                    bgColor={areaStatus[area.status?.name]?.bgColor}
                    color={areaStatus[area.status?.name]?.color}
                  />
                }
              />
              <div className="occupancy">
                <CustomDataPlaceholder name={"Occupancy"} value={"10/40"} />
                <CustomProgressBar
                  currentCapacity={10}
                  maxCapacity={40}
                  width={"100%"}
                  mt={"10px"}
                />
              </div>
            </div>
          </div>
          {/* <div
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
          </div> */}

          <Button
            sx={{
              fontSize: 15,

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
            Edit Area
          </Button>
          <Button
            sx={{
              fontSize: 15,

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
              Zoo cages
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
                  options={cages}
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
                      label="Cage name"
                      placeholder="Search for a cage name"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px", // Adjust the border radius value as needed
                        },
                        // width: "500px",
                        "& .MuiInputBase-input": {
                          // Replace with your desired font family
                        },
                        "& .MuiInputLabel-root": {
                          // Replace with your desired font family
                        },
                      }}
                    />
                  )}
                />
                <Button
                  sx={{
                    fontSize: 15,

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

                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#01008A",
                  borderRadius: "8px",
                  padding: "12px 20px",
                  fontWeight: 600,
                }}
              >
                Add Cage
              </Button>
            </div>
            <div className="table" style={{ marginTop: " 15px" }}>
              <CagesTbl inDetail={true} data={cages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDetail;
