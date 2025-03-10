import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AnimalTypeCard from "./components/AnimalTypeCard";
import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { fontFamily } from "./constants/fontFamily";

const theme = createTheme({
  typography: { fontFamily: fontFamily.msr },
});

function App() {
  const location = useLocation();
  const currentPage = location.pathname;
  const isChildRoute = currentPage.split("/").filter(Boolean).length > 1;

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat",
        },
      }}
    >
      <ThemeProvider theme={theme}>
        {/* <Navigate to={"/areas"} /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            // width: "100vw",
            // backgroundColor: "#FBFBFF",
            // overflowY: isChildRoute ? "scroll" : "hidden",
          }}
        >
          <Header />
          <div style={{ display: "flex", marginTop: "58px" }}>
            <SideBar />
            <div
              style={{
                flex: 1,
                overflow: "hidden",
                marginLeft: "240px",
                marginTop: "10px",
              }}
            >
              <div
                className="page"
                style={{
                  padding: "20px 24px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ConfigProvider>
    // <AnimalTypeCard />
  );
}

export default App;
