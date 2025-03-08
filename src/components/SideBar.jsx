import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { List, ListItemButton } from "@mui/material";
import FenceIcon from "@mui/icons-material/Fence";
import ForestIcon from "@mui/icons-material/Forest";
import PetsIcon from "@mui/icons-material/Pets";
import ReportIcon from "@mui/icons-material/Report";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Groups2Icon from "@mui/icons-material/Groups2";
import FeedIcon from "@mui/icons-material/Feed";
import { fontFamily } from "../constants/fontFamily";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  {
    name: "Zoo Cages",
    icon: <FenceIcon />,
    url: "/zoo-cages",
  },
  {
    name: "Areas",
    icon: <ForestIcon />,
    url: "/areas",
  },
  {
    name: "Animals",
    icon: <PetsIcon />,
    url: "/animals",
  },
  {
    name: "Types",
    icon: <PetsIcon />,
    url: "/types",
  },
  {
    name: "Reports",
    icon: <ReportIcon />,
    url: "/reports",
  },
  {
    name: "Schedule",
    icon: <CalendarMonthIcon />,
    url: "/schedule",
  },
  {
    name: "Teams",
    icon: <Groups2Icon />,
    url: "/teams",
  },
  {
    name: "News",
    icon: <FeedIcon />,
    url: "/news",
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize selectedTab with the correct index based on the current URL
  const initialTabIndex = tabs.findIndex(
    (tab) => tab.url === location.pathname
  );
  const [selectedTab, setSelectedTab] = useState(
    initialTabIndex !== -1 ? initialTabIndex : 0
  );

  const handleListItemClick = (index) => {
    setSelectedTab(index);
    navigate(tabs[index].url);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        // backgroundColor: "white",
        position: "fixed",
        backgroundColor: "#F7F7FF",
      }}
    >
      <List
        className=""
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          p: "30px 20px",
        }}
      >
        {tabs.map((t, index) => (
          <ListItemButton
            selected={selectedTab === index}
            onClick={() => handleListItemClick(index)}
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px 30px",
              gap: "15px",
              borderRadius: "8px",
              backgroundColor:
                selectedTab === index ? "#01008A" : "transparent",
              color: selectedTab === index ? "white" : "black",
            }}
          >
            <div className="icon">{t.icon}</div>
            <Typography
              variant="body1"
              color={selectedTab === index ? "white" : "black"}
              // key={index}
              fontSize={17}
              fontFamily={fontFamily.msr}
              fontWeight={selectedTab === index ? 600 : 500}
            >
              {t.name}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
