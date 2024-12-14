"use client";
import React, { useState } from "react";
import { Box, Card, Divider, Input, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CiMenuKebab } from "react-icons/ci";

import { TfiExport } from "react-icons/tfi";
import AddIcon from "@mui/icons-material/Add";
import Filters from "@/app/components/CompaniesComponents/Filters";
import CompaniesDetails from "@/app/components/CompaniesComponents/View/CompaniesDetails";
import CompaniesCard from "@/app/components/CompaniesComponents/View/Card/CompaniesCard";
import CustomSelect from "@/app/components/CustomSelect/CustomSelect";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import CustomTable from "@/app/components/Tables/CustomTable/CustomTable";
import CustomModal from "@/app/components/Modal/Modal";
import { modalStyles } from "@/app/theme/styles";
import AddUser from "@/app/components/CompaniesComponents/AddUser";

function View() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = {
    Name: "Zaheer Abbas",
    Email_Address: "zaheer@albusayradelivery.com",
    Website: "www.al-busayra.com",
    Phone_Number: "+971 123 456 7890",
    Industry: "Delivery Services",
    Country: "United Arab Emirates",
    "State/Province": "Dubai",
    City: "Dubari",
    Locations: "Dubai, Sharjah, Ajman",
    Business_Address:
      "Office no N12, first floor  G9, building al majaz sharjha",
    Status: "Active",
  };
  const d = [
    {
      img: "",
      name: "Total Users",
      count: 50,
      color: "#01AB9C",
    },
    {
      img: "",
      name: "Active Users",
      count: 50,
      color: "#CA4F8E",
    },
    {
      img: "",
      name: "Inactive Users",
      count: 50,
      color: "#FFAC30",
    },
  ];
  const ageOptions = [
    { value: 10, label: 10 },
    { value: 20, label: 10 },
    { value: 30, label: 10 },
  ];

  return (
    <Box
      container
      spacing={2}
      sx={{ display: "flex", flexDirection: "row", gap: "15px", mt: 5 }}
    >
      <Box item xs={12} md={4}>
        <CompaniesDetails userData={userData} />
      </Box>

      <Box
        width={"100%"}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Box sx={{ width: "100%" }}>
          <CompaniesCard d={d} />
        </Box>
        <Card
          sx={{
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingY: "25px",
            overflowX: "auto",
          }}
        >
          <Box
            sx={{
              paddingX: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography>Advance Filter</Typography>

            <Filters />
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingX: "25px",
            }}
          >
            <Box>
              <CustomSelect options={ageOptions} style={{ width: "70px" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "end",
                gap: "16px",
                width: "100%",
              }}
            >
              <Input sx={{ maxWidth: "250px" }} />
              <CustomButton
                variant="contained"
                color="gray"
                start={<TfiExport />}
                btnText="Export"
                width="108px"
              />
              <CustomButton
                variant="contained"
                color="primary"
                end={<AddIcon />}
                btnText="Add New"
                width="124px"
                onClick={() => setIsModalOpen(true)}
              />
              <Box
                sx={{
                  backgroundColor: "#80839029",
                  padding: "8px",
                  borderRadius: "6px",
                }}
              >
                <CiMenuKebab />
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <CustomTable />
          </Box>
          <CustomModal
            style={modalStyles}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <AddUser isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen} />
          </CustomModal>
        </Card>
      </Box>
    </Box>
  );
}

export default View;
