import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AnimalTypeCard from "./components/AnimalTypeCard";
import { ConfigProvider } from "antd";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // width: "100vw",
          // backgroundColor: "#FBFBFF",
          overflowY: isChildRoute ? "scroll" : "hidden",
        }}
      >
        <Header />
        <div style={{ display: "flex", marginTop: "68px" }}>
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
    </ConfigProvider>
    // <AnimalTypeCard />
  );
}

export default App;
