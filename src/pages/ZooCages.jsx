import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { fontFamily } from "../constants/fontFamily";
import CagesTbl from "../components/tables/CagesTbl";
import { cages } from "../data/cages";
import FilterListIcon from "@mui/icons-material/FilterList";

const ZooCages = () => {
  return (
    <div>
      <Typography
        variant="body1"
        color="initial"
        fontSize={24}
        fontFamily={fontFamily.msr}
        fontWeight={600}
        sx={{ mb: "20px" }}
      >
        Zoo Cages Overview
      </Typography>

      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
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
          // onClick={() => fetchData()}
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
          Create cage
        </Button>
      </div>
      <CagesTbl />
    </div>
  );
};

export default ZooCages;
