import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { fontFamily } from "../../constants/fontFamily";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "../../constants/styles";
import { cages } from "../../data/cages";
import axios from "axios";
import { BASE_URL, otherConstant } from "../../constants/otherConstant";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  p: "30px",
  borderRadius: "10px",
};

const CreateArea = ({ open, handleClose, pet }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    img: "",
    areaName: "",
    location: "",
    desc: "",
    animalOrder: "",
    totalSize: "",
    status: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreateArea = async () => {
    const body = {
      name: form.areaName,
      description: form.desc,
      animalOrder: form.animalOrder,
      location: form.location,
      size: form.totalSize,
      urlImages: [form.img],
      statusId: form.status,
    };
    try {
      const response = await axios.post(`${BASE_URL}/ZooArea/zooArea`, body);
      console.log(response.data.data.id);
      navigate(`/areas/${response.data.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogForm = () => {
    console.log(form);
  };

  return (
    <Modal open={open}>
      <Box sx={style}>
        <div
          className="modal-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body1"
            color="initial"
            fontFamily={fontFamily.msr}
            fontWeight={600}
            fontSize={22}
          >
            Create new Area
          </Typography>
          <IconButton onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography
          variant="body1"
          fontFamily={fontFamily.msr}
          color={styles.TEXT_SECONDARY}
          fontSize={14}
        >
          Provide the necessary details for the new cage. Ensure accuracy to
          maintain consistency.
        </Typography>
        <div className="modal-content" style={{ marginTop: "24px" }}>
          <div
            className="key-information"
            // style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontWeight={600}
              fontSize={16}
              sx={{ mb: "20px" }}
            >
              Key Information
            </Typography>
            <div
              className="key-body"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div className="" style={{ display: "flex", gap: 12 }}>
                <TextField
                  id=""
                  placeholder="Area Name"
                  name="areaName"
                  label="Area Name"
                  value={form.areaName}
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    width: "50%",
                  }}
                />
                <FormControl sx={{ width: "50%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Area Location
                  </InputLabel>
                  <Select
                    value={form.location}
                    label="Area Location"
                    name="location"
                    onChange={(e) => handleChangeForm(e)}
                    sx={{ borderRadius: "10px", fontFamily: fontFamily.msr }}
                  >
                    <MenuItem value={"North"}>North</MenuItem>
                    <MenuItem value={"NorthEast"}>NorthEast</MenuItem>
                    <MenuItem value={"East"}>East</MenuItem>
                    <MenuItem value={"SouthEast"}>SouthEast</MenuItem>
                    <MenuItem value={"South"}>South</MenuItem>
                    <MenuItem value={"SouthWest"}>SouthWest</MenuItem>
                    <MenuItem value={"West"}>West</MenuItem>
                    <MenuItem value={"NorthWest"}>NorthWest</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div
                className="img"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // marginTop: "10px",
                  // margin: "16px 0",
                  gap: 12,
                }}
              >
                <TextField
                  id=""
                  placeholder="Image"
                  name="img"
                  label="Image"
                  value={form.img}
                  onChange={(e) => handleChangeForm(e)}
                  // fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    // marginTop: "10px",
                    flex: 1,
                  }}
                />
                <Button
                  sx={{
                    fontSize: 15,

                    textTransform: "none",
                    color: "#01008A",
                    // backgroundColor: "#01008A",
                    border: "1px solid #01008A",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    fontWeight: 600,
                  }}
                >
                  View Image
                </Button>
              </div>
              <div
                className="status-capacity"
                style={{ display: "flex", gap: 12 }}
              >
                <TextField
                  id=""
                  placeholder="Animal Order"
                  name="animalOrder"
                  label="Animal Order"
                  value={form.animalOrder}
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    width: "50%",
                  }}
                />
                <FormControl sx={{ width: "50%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Area Status
                  </InputLabel>
                  <Select
                    value={form.status}
                    label="Area Status"
                    name="status"
                    onChange={(e) => handleChangeForm(e)}
                    sx={{ borderRadius: "10px", fontFamily: fontFamily.msr }}
                  >
                    <MenuItem value={5}>Open</MenuItem>
                    <MenuItem value={6}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <TextField
                id=""
                placeholder="Area Description"
                name="desc"
                label="Area Description"
                value={form.desc}
                onChange={(e) => handleChangeForm(e)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />
            </div>
          </div>
          {/* <div className="classification" style={{ marginTop: "22px" }}>
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontWeight={600}
              fontSize={16}
              sx={{ mb: "20px" }}
            >
              Cage Assignment
            </Typography>
            <div className="area-team" style={{ display: "flex", gap: 12 }}>
              <Autocomplete
                disablePortal
                options={cages}
                sx={{ width: "100%" }}
                getOptionLabel={(option) => option.currentTeam}
                renderOption={(props, option) => (
                  <Typography variant="body1" color="initial" {...props}>
                    {option.currentTeam}
                  </Typography>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Team name"
                    placeholder="Search for a team "
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px", // Adjust the border radius value as needed
                      },
                    }}
                  />
                )}
              />
            </div>
          </div> */}

          <div className="size-information" style={{ marginTop: "22px" }}>
            <Typography
              variant="body1"
              color="initial"
              fontFamily={fontFamily.msr}
              fontWeight={600}
              fontSize={16}
              sx={{ mb: "20px" }}
            >
              Size Information
            </Typography>
            <div className="area-team" style={{ display: "flex", gap: 12 }}>
              <TextField
                id=""
                placeholder="Total Size"
                name="totalSize"
                label="Total Size"
                value={form.totalSize}
                onChange={(e) => handleChangeForm(e)}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </div>
          </div>

          <div
            className="button-group"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 15,
              marginTop: "30px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                fontSize: 16,

                fontWeight: 600,
                border: "1px solid #01008A",
                color: "#01008A",
                borderRadius: "10px",
                p: "12px 20px",
              }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: 16,

                fontWeight: 600,
                // border: "1px solid #01008A",
                bgcolor: "#01008A",
                color: "white",
                borderRadius: "10px",
                p: "12px 40px",
              }}
              onClick={() => handleCreateArea()}
            >
              Create Area
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateArea;
