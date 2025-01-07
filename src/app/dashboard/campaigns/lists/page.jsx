'use client'
import SharedHeader from "@/app/components/SharedHeader/SharedHeader";
import { useCampaignsContext } from "@/context/campaignsProvider";
import {  Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import EmptyComponent from "@/app/components/EmptyComponent/EmptyComponent";
import CampaignCard from "@/app/components/CampaignCard/CampaignCard";

function CampaignsList() {
  const { isModalOpen, setIsModalOpen,addCampaign,campaigns } = useCampaignsContext();
  const campaignsData = [
    {
      totalApplied:'100',
      createdOn:' 12/08/2024',
      from_date:'10/07/2024 10:30 PM',
      to_date:'10/06/2024 12:30 PM',
      website:"https://www.yourplatform.com",
    }
  ]
  useEffect(()=> {
      if(campaignsData?.length > 0) {
        addCampaign(campaignsData ?? [])
      }
  },[])
  return (
    <Grid  >
      <SharedHeader
        name="Campaigns"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        btnText="Add Campaign"
      />
      <Divider/>
      <Grid>
      {
        campaigns?.length > 0 ? <Box> <CampaignCard/></Box> : <EmptyComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} 
        description = {'Please click the button below to add your new campaign.'}
        btnText = 'Add Campaign'
      />
      }
      </Grid>
      
    </Grid>
  )
}

export default CampaignsList