import { Box, Button, IconButton, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import { fontFamily } from "../constants/fontFamily";
import VerticalDivider from "./VerticalDivider";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import BlindsIcon from "@mui/icons-material/Blinds";
import { useNavigate, useNavigation } from "react-router-dom";
import { otherConstant } from "../constants/otherConstant";

const CustomPopover = ({ status, page, recordID, viewURL }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (url) => {
    navigate(url);
  };

  const baseActions = [
    {
      name: "View",
      icon: <VisibilityIcon />,
      url: viewURL,
    },
    {
      name: "Update",
      icon: <UpdateIcon />,
      url: "",
    },
    // {
    //   name: "Delete",
    //   icon: <DeleteIcon />,
    // },
  ];

  const open = Boolean(anchorEl);

  const handleCloseCage = (id) => {};

  const areaActions =
    page === otherConstant.AREA && status === "Open"
      ? [
          ...baseActions,
          {
            name: "Close area",
            icon: <BlindsIcon />,
            action: handleCloseCage(recordID),
          },
        ]
      : [
          ...baseActions,
          {
            name: "Open area",
            icon: <BlindsClosedIcon />,
            action: handleCloseCage(recordID),
          },
        ];

  const cageActions =
    page === otherConstant.CAGES && status === "Open"
      ? [
          ...baseActions,
          {
            name: "Close cage",
            icon: <BlindsIcon />,
            action: handleCloseCage(recordID),
          },
        ]
      : [
          ...baseActions,
          {
            name: "Open cage",
            icon: <BlindsClosedIcon />,
            action: handleCloseCage(recordID),
          },
        ];

  const actions = page === otherConstant.CAGES ? cageActions : areaActions;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 1, display: "flex", alignItems: "center", gap: "10px" }}>
          {actions.map((action, index) => (
            <>
              <Button
                sx={{
                  fontSize: "13px",
                  fontFamily: fontFamily.msr,
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#000000",
                  // fontWeight: "600",
                }}
                onClick={() => handleNavigate(action.url)}
              >
                {action.icon}
                {action.name}
              </Button>
              {index < actions.length - 1 && <VerticalDivider />}
            </>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default CustomPopover;
