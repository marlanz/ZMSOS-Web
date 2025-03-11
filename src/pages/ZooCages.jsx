import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fontFamily } from "../constants/fontFamily";
import CagesTbl from "../components/tables/CagesTbl";
import { cages } from "../data/cages";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddAnimalType from "../components/modals/AddAnimalType";
import AnimalDetail from "../components/modals/AnimalDetail";
import CreateCage from "../components/modals/CreateCage";

const ZooCages = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
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
        Zoo Cages Overview
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
            options={cages}
            sx={{ width: 500 }}
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
          onClick={() => handleOpenModal()}
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
          Create cage
        </Button>
      </div>
      <CagesTbl data={cages} />
      <CreateCage open={open} handleClose={handleCloseModal} />
    </div>
  );
};

export default ZooCages;
