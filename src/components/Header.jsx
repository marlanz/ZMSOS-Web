import { IconButton, Typography } from "@mui/material";
import { fontFamily } from "../constants/fontFamily";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#01008A",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "12px 40px",
        position: "fixed",
        width: "100%",
        gap: 710,
        zIndex: 1,
      }}
    >
      <div
        className="left"
        style={{ display: "flex", gap: 6, alignItems: "center" }}
      >
        <Typography
          variant="body1"
          color="white"
          fontSize={28}
          fontWeight={600}
          fontFamily={fontFamily.msr}
        >
          ZMSOS
        </Typography>
        <Typography
          variant="body1"
          color="white"
          fontSize={32}
          fontFamily={fontFamily.msr}
        >
          Manager
        </Typography>
      </div>
      <div className="right" style={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="body1"
          color="white"
          fontSize={16}
          fontFamily={fontFamily.msr}
        >
          Welcome Manager,{" "}
          <span style={{ fontWeight: 600 }}>phucanhdodang1211@gmail.com</span>
        </Typography>
        {/* <Avatar src={imgURL.racoon} sx={{ width: "38px", height: "38px" }}>
          PA
        </Avatar> */}
        <IconButton sx={{ ml: "10px" }}>
          <LogoutIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
