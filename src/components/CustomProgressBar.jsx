import React from "react";

const CustomProgressBar = ({
  currentCapacity,
  maxCapacity,
  width,
  height,
  mt,
}) => {
  return (
    <div
      className="progress-bar"
      style={{
        width: !width ? "50px" : width,
        height: !height ? "7px" : height,
        backgroundColor: "#e5e7eb",
        // marginLeft: "15px",
        borderRadius: "10px",
        marginTop: mt && mt,
      }}
    >
      <div
        className="progress"
        style={{
          width: currentCapacity
            ? `${(currentCapacity / maxCapacity) * 100}%`
            : 0,
          backgroundColor: "#103559",
          height: "100%",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default CustomProgressBar;
