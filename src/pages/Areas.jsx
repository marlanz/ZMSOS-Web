import { Autocomplete, Button, TextField, Typography } from "@mui/material";

import { fontFamily } from "../constants/fontFamily";
import AreaTbl from "../components/tables/AreaTbl";
import { area } from "../data/area";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useEffect } from "react";

const Areas = () => {
  return (
    <div>
      <Typography
        variant="body1"
        color="initial"
        fontSize={22}
        fontFamily={fontFamily.msr}
        fontWeight={600}
        // sx={{ mb: "20px" }}
      >
        Areas Overview
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
            options={area}
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
                label="Area name"
                placeholder="Search for an area"
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
          Create area
        </Button>
      </div>
      <AreaTbl />
    </div>
  );
};

export default Areas;
