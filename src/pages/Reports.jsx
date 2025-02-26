import { Table } from "antd";
import React from "react";
import { createStyles } from "antd-style";
import { fontFamily } from "../constants/fontFamily";
import { Button } from "@mui/material";
import { types } from "../data/types";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const Reports = () => {
  const { styles } = useStyle();

  const getName = (name) => {
    console.log(name);
  };

  const dataSource = types.map((type) => ({
    key: type.id,
    img: type.img,
    scientificName: type.scientificName,
    vietnameseName: type.vietnameseName,
    englishName: type.englishName,
    family: type.family,
    weightRange: type.weightRange,
    characteristics: type.characteristics,
    distribution: type.distribution,
    habitat: type.habitat,
    diet: type.diet,
    reproduction: type.reproduction,
    conservationStatus: type.conservationStatus,
  }));

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      render: (img) => (
        <img src={img} alt="animal" style={{ width: 50, height: 50 }} />
      ),
      width: 100,
    },
    {
      title: "Scientific Name",
      dataIndex: "scientificName",
    },
    {
      title: "Vietnamese Name",
      dataIndex: "vietnameseName",
    },
    {
      title: "English Name",
      dataIndex: "englishName",
    },
    {
      title: "Family",
      dataIndex: "family",
    },
    {
      title: "Weight Range",
      dataIndex: "weightRange",
    },

    {
      title: "Action",
      dataIndex: "",
      render: (_, record) => (
        <>
          <Button
            sx={{ fontFamily: fontFamily.msr }}
            onClick={() => getName(record.name)}
          >
            get name
          </Button>{" "}
          <Button sx={{ fontFamily: fontFamily.msr }}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <Table
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className={styles.customTable}
      columns={columns}
      dataSource={dataSource}
      scroll={{
        y: 55 * 8,
      }}
      // pagination={{
      //   pageSize: 50,
      // }}
    />
  );
};

export default Reports;
