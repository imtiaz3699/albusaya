import { Box, Card } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { FiSend } from "react-icons/fi";
function CampaignCard() {
  return (
    <Card
      sx={{
        maxWidth: "381px",
        width: "100%",
        borderRadius: "20px",
        background:`rgba(79, 113, 234, 1)`,
        color: "white",
        marginTop:'13px'
      }}
    >
      <Box sx = {{
        paddingX:'20px',
        paddingY:'30px',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
      }}>
        <div className= 'border-[1px] border-white rounded-[100px] px-[10px] py-[8px] flex flex-row items-center justify-between'>
            <div className = 'flex flex-row items-center gap-[15px]'>
            <div className = 'bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center'>
            <FiSend className = 'text-[#4B76E8] text-[20px]'/>
            </div>
            <div className = 'text-[16px] font-semibold leading-[18.8px] '>Total Applied</div>
            </div>
            <div className = 'font-medium text-[25px] text-[#FFFFFF]'>100</div>
        </div>
        <div className = 'dashed-border w-full'> </div>
        <div className = 'flex flex-row items-center w-full justify-between'>
        <span className  = 'text-[16px] font-semibold '>Winter Fair</span>
        <div className = 'underline text-[14px] leading-[16px] font-normal'>
            <span>Created On:</span>
            <span>12/08/2024</span>
        </div>
        
        </div>
        <p className = 'text-[14px] font-normal text-[#FFFFFF]'>Join us for the Winter Fair Hiring campaign, where we're on the lookout for enthusiastic riders to join our team in the UAE! As the festive season approaches.</p>
        <div className = 'flex flex-row items-center justify-between'>
            <span className = 'font-bold text-[12px] leading-[14px] underline'>From: 10/07/2024 10:30 PM</span>
            <span className = 'font-bold text-[12px] leading-[14px] underline'>To: 10/06/2024 12:30 PM</span>
        </div>
      </Box>
    </Card>
  );
}

export default CampaignCard;
