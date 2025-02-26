import { Button, Typography } from "@mui/material";
import React from "react";
import { fontFamily } from "../constants/fontFamily";
import CagesTbl from "../components/tables/CagesTbl";

const ZooCages = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={24}
          fontFamily={fontFamily.msr}
          fontWeight={600}
        >
          Cages
        </Typography>
        <div className="left" style={{ display: "flex", alignItems: "center" }}>
          {/* <Autocomplete
        disablePortal
        options={area}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Area"
            placeholder="Search for an area"
          />
        )}
      /> */}
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
      </div>
      <CagesTbl />
    </div>
  );
};

export default ZooCages;
