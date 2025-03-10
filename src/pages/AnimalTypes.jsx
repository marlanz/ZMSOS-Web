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
import { fontFamily } from "../constants/fontFamily";
import CustomDivider from "../components/CustomDivider";
import { types } from "../data/types";
import AnimalTypeCard from "../components/AnimalTypeCard";
import CloseIcon from "@mui/icons-material/Close";
import { fetchAllTypes } from "../api/animalTypes";
import AnimalTypesTbl from "../components/tables/AnimalTypesTbl";
import FilterListIcon from "@mui/icons-material/FilterList";

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

const AnimalTypes = () => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    img: "",
    scientificName: "",
    engName: "",
    vieName: "",
    family: "",
    conservationStatus: "",
    weightRange: "",
    characteristics: "",
    distribution: "",
    habitat: "",
    diet: "",
    reproduction: "",
  });

  const fetchData = async () => {
    try {
      const data = await fetchAllTypes();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <Typography
        variant="body1"
        color="initial"
        fontSize={22}
        fontFamily={fontFamily.msr}
        fontWeight={600}
      >
        Animal Types Overview
      </Typography>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          margin: "15px 0",
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
            options={types}
            sx={{ width: 500 }}
            getOptionLabel={(option) => option.scientificName}
            renderOption={(props, option) => (
              <Typography
                variant="body1"
                color="initial"
                {...props}
                fontFamily={fontFamily.msr}
              >
                {option.scientificName}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Type name"
                placeholder="Search for a type "
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // Adjust the border radius value as needed
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
          // onClick={() => handleOpenModal()}
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
          Create Type
        </Button>
      </div>
      {/* <CustomDivider /> */}
      <AnimalTypesTbl />
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
              fontSize={24}
            >
              Create new Animal Type
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography
            variant="body1"
            fontFamily={fontFamily.msr}
            color="#667479"
            fontSize={14}
          >
            Provide the necessary details for the new type. Ensure accuracy to
            maintain consistency.
          </Typography>
          <div
            className="modal-content"
            style={{ marginTop: "20px", height: "500px", overflowY: "scroll" }}
          >
            <div
              className="names"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontWeight={600}
                fontSize={16}
              >
                Animal Names
              </Typography>
              <div className="" style={{ display: "flex", gap: 12 }}>
                <TextField
                  id=""
                  placeholder="Scientific Name"
                  name="scientificName"
                  label="Scientific Name"
                  value={form.scientificName}
                  onChange={(e) => handleChangeForm(e)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  id=""
                  placeholder="Vietnamese Name"
                  name="vieName"
                  label="Vietnamese Name"
                  value={form.vieName}
                  onChange={(e) => handleChangeForm(e)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  id=""
                  placeholder="English Name"
                  name="engName"
                  label="English Name"
                  value={form.engName}
                  onChange={(e) => handleChangeForm(e)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              </div>
              <div
                className="img"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
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
            </div>
            <div className="classification" style={{ marginTop: "18px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontWeight={600}
                fontSize={16}
              >
                Classification
              </Typography>
              <div
                className=""
                style={{ display: "flex", gap: 12, marginTop: "15px" }}
              >
                <TextField
                  id=""
                  placeholder="Family"
                  name="family"
                  label="Family"
                  value={form.family}
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    width: "70%",
                  }}
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Conservational Status
                  </InputLabel>
                  <Select
                    value={form.isAdoptPetBefore}
                    label="Conservational Status"
                    name="conservationStatus"
                    onChange={(e) => handleChangeForm(e)}
                    sx={{ borderRadius: "10px" }}
                  >
                    <MenuItem value={"Least Concern"}>Least Concern</MenuItem>
                    <MenuItem value={"Near Threatened"}>
                      Near Threatened
                    </MenuItem>
                    <MenuItem value={"Vulnerable"}>Vulnerable</MenuItem>
                    <MenuItem value={"Endangered"}>Endangered</MenuItem>
                    <MenuItem value={"Critically Endangered"}>
                      Critically Endangered
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="physic-charac" style={{ marginTop: "18px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontWeight={600}
                fontSize={16}
              >
                Physical Characteristics
              </Typography>
              <div
                className=""
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: "15px",
                  flexDirection: "column",
                }}
              >
                <TextField
                  id=""
                  placeholder="Weight Rage"
                  name="weightRange"
                  label="Weight Rage"
                  value={form.weightRange}
                  fullWidth
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    // width: "70%",
                  }}
                />
                <TextField
                  id=""
                  placeholder="Characteristics"
                  name="characteristics"
                  label="Characteristics"
                  value={form.characteristics}
                  fullWidth
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
            <div className="hab-dist" style={{ marginTop: "18px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontWeight={600}
                fontSize={16}
              >
                Habitat and Distribution
              </Typography>
              <div
                className=""
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: "15px",
                  flexDirection: "column",
                }}
              >
                <TextField
                  id=""
                  placeholder="Habitat"
                  name="habitat"
                  label="Habitat"
                  value={form.habitat}
                  fullWidth
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    // width: "70%",
                  }}
                />
                <TextField
                  id=""
                  placeholder="Distribution"
                  name="distribution"
                  label="Distribution"
                  value={form.distribution}
                  fullWidth
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
            <div className="bio" style={{ marginTop: "18px" }}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={fontFamily.msr}
                fontWeight={600}
                fontSize={16}
              >
                Biology Profile
              </Typography>
              <div
                className=""
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: "15px",
                  flexDirection: "column",
                }}
              >
                <TextField
                  id=""
                  placeholder="Reproduction"
                  name="reproduction"
                  label="Reproduction"
                  value={form.reproduction}
                  fullWidth
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    // width: "70%",
                  }}
                />
                <TextField
                  id=""
                  placeholder="Diet"
                  name="diet"
                  label="Diet"
                  value={form.diet}
                  fullWidth
                  onChange={(e) => handleChangeForm(e)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                    marginTop: "10px",
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
              >
                Create Type
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AnimalTypes;
