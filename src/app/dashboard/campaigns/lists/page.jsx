"use client";
import SharedHeader from "@/app/components/SharedHeader/SharedHeader";
import { useCampaignsContext } from "@/context/campaignsProvider";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import EmptyComponent from "@/app/components/EmptyComponent/EmptyComponent";
import CampaignCard from "@/app/components/CampaignCard/CampaignCard";
import CustomModal from "@/app/components/Modal/Modal";
import AddCampaign from "@/app/components/CampaignCard/AddCampaign";
const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  width: "100%",
  maxWidth: 864,
  maxHeight: "553px",
  height: "100%",
  overflow: "auto",
  boxShadow: 24,
  p: 4,
};
function CampaignsList() {
  const { isModalOpen, setIsModalOpen, addCampaign, campaigns } =
    useCampaignsContext();
  const campaignsData = [
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "100",
      createdOn: "12/08/2024",
      from_date: "10/07/2024 10:30 PM",
      to_date: "10/06/2024 12:30 PM",
      website: "https://www.yourplatform.com",
      color: "#DA6E7F", // Pinkish
    },
    {
      totalApplied: "150",
      createdOn: "12/09/2024",
      from_date: "11/01/2024 09:00 AM",
      to_date: "11/30/2024 05:00 PM",
      website: "https://www.example1.com",
      color: "#FF5733", // Orange
    },
    {
      totalApplied: "250",
      createdOn: "12/10/2024",
      from_date: "11/05/2024 08:00 AM",
      to_date: "11/25/2024 06:00 PM",
      website: "https://www.example2.com",
      color: "#33FF57", // Green
    },
    {
      totalApplied: "300",
      createdOn: "12/11/2024",
      from_date: "11/15/2024 07:30 AM",
      to_date: "12/05/2024 04:00 PM",
      website: "https://www.example3.com",
      color: "#3357FF", // Blue
    },
    {
      totalApplied: "400",
      createdOn: "12/12/2024",
      from_date: "11/20/2024 10:00 AM",
      to_date: "12/15/2024 03:30 PM",
      website: "https://www.example4.com",
      color: "#FFC300", // Yellow
    },
    {
      totalApplied: "500",
      createdOn: "12/13/2024",
      from_date: "11/25/2024 11:15 AM",
      to_date: "12/20/2024 02:45 PM",
      website: "https://www.example5.com",
      color: "#DAF7A6", // Light Green
    },
    {
      totalApplied: "600",
      createdOn: "12/14/2024",
      from_date: "12/01/2024 01:00 PM",
      to_date: "12/25/2024 01:00 PM",
      website: "https://www.example6.com",
      color: "#C70039", // Dark Red
    },
    {
      totalApplied: "700",
      createdOn: "12/15/2024",
      from_date: "12/05/2024 02:30 PM",
      to_date: "12/30/2024 11:00 AM",
      website: "https://www.example7.com",
      color: "#900C3F", // Maroon
    },
    {
      totalApplied: "800",
      createdOn: "12/16/2024",
      from_date: "12/10/2024 03.45 PM",
      to_date: "01.05.2025 09.30 AM",
      website: "https://www.example8.com",
      color: "#581845", // Dark Purple
    },
    {
      totalApplied: "900",
      createdOn: "12/17/2024",
      from_date: "12/15/2024 04.00 PM",
      to_date: "01.10.2025 10.00 AM",
      website: "https://www.example9.com",
      color: "#FFC0CB", // Light Pink
    },
  ];

  useEffect(() => {
    if (campaignsData?.length > 0) {
      addCampaign(campaignsData ?? []);
    }
  }, []);
  return (
    <Grid>
      <SharedHeader
        name="Campaigns"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        btnText="Add Campaign"
      />
      <Divider />
      <Grid>
        {campaigns?.length > 0 ? (
          <Box>
            <div className="grid grid-cols-4 gap-[20px]">
              {campaigns?.map((element, idx) => {
                return (
                  <CampaignCard
                    key={idx}
                    element={element}
                    setIsModalOpen={setIsModalOpen}
                  />
                );
              })}
            </div>
          </Box>
        ) : (
          <EmptyComponent
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            description={
              "Please click the button below to add your new campaign."
            }
            btnText="Add Campaign"
          />
        )}
      </Grid>
      <CustomModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        style={modalStyles}
      >
        <AddCampaign />
      </CustomModal>
      
    </Grid>
  );
}

export default CampaignsList;
