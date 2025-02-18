import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AnimalTypeCard from "./components/AnimalTypeCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        // backgroundColor: "#FBFBFF",
      }}
    >
      <Header />
      <div style={{ display: "flex", marginTop: "78px" }}>
        <SideBar />
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            marginLeft: "260px",
            marginTop: "20px",
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
    // <AnimalTypeCard />
  );
}

export default App;
