import React from "react";
import Typography from "@mui/material/Typography";
import { fontFamily } from "../constants/fontFamily";
import { Autocomplete, Button, TextField } from "@mui/material";
import AnimalsTbl from "../components/tables/AnimalsTbl";
import { animals } from "../data/animals";
import FilterListIcon from "@mui/icons-material/FilterList";

const Animals = () => {
  return (
    <div>
      <Typography
        variant="body1"
        color="initial"
        fontSize={22}
        fontFamily={fontFamily.msr}
        fontWeight={600}
      >
        Animals Overview
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
            options={animals}
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
                label="Animal name"
                placeholder="Search for an animal name"
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
          // onClick={() => fetchData()}
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
      <AnimalsTbl />
    </div>
  );
};

export default Animals;
