import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { FiSend } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import { MdOutlineContentCopy } from "react-icons/md";


function CampaignCard({element,setIsModalOpen}) {
  
  console.log(element,'Shadi Karolo')
  return (
    <Card
      sx={{
        maxWidth: "381px",
        width: "100%",
        borderRadius: "20px",
        background: `rgba(79, 113, 234, 1)`,
        color: "white",
        marginTop: "13px",
      }}
    >
      <Box
        sx={{
          paddingX: "20px",
          paddingY: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="border-[1px] border-white rounded-[100px] px-[10px] py-[8px] flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-[15px]">
            <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
              <FiSend className="text-[#4B76E8] text-[20px]" />
            </div>
            <div className="text-[16px] font-semibold leading-[18.8px] ">
              Total Applied
            </div>
          </div>
          <div className="font-medium text-[25px] text-[#FFFFFF]">{element?.totalApplied}</div>
        </div>
        <div className="dashed-border w-full"> </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-[16px] font-semibold ">Winter Fair</span>
          <div className="underline text-[14px] leading-[16px] font-normal">
            <span>Created On:</span>
            <span>12/08/2024</span>
          </div>
        </div>
        <p className="text-[14px] font-normal text-[#FFFFFF]">
          Join us for the Winter Fair Hiring campaign, where we're on the
          lookout for enthusiastic riders to join our team in the UAE! As the
          festive season approaches.
        </p>
        <div className="flex flex-row items-center justify-between">
          <span className="font-bold text-[12px] leading-[14px] underline">
            From: 10/07/2024 10:30 PM
          </span>
          <span className="font-bold text-[12px] leading-[14px] underline">
            To: 10/06/2024 12:30 PM
          </span>
        </div>
        <div className="dashed-border w-full"> </div>
        <div className="w-full flex flex-row items-center justify-between bg-white  rounded-[35px]">
          <span className="bg-[#104774] rounded-l-[35px] py-[7px] px-[9px] text-[14px] font-normal">
            Link
          </span>
          <span className="text-[#104774] text-[15px] font-normal underline">
            https://www.yourplatform.co...
          </span>
          <div className="bg-[#104774] rounded-r-[35px] py-[7px] px-[9px] h-full">
            <MdOutlineContentCopy className="text-[21px]" />
          </div>
        </div>
        <div className="dashed-border w-full"> </div>

        <div className="flex flex-row items-center justify-between">
          <FormControlLabel
            control={
              <Switch defaultChecked className="text-green-500 text-[13px]" color="green" />
            }
            label="Label"
            labelPlacement="start"
          />
          <div className="flex flex-row items-center gap-[10px]">
            <Button
              startIcon={<RiDeleteBinLine className= 'w-[10px] h-[16px]' />}
              variant="contained"
              color="border-button-red"
              className="!w-[84px] !text-[13px] !h-[30px] !text-white">
              Delete
            </Button>
            <Button
              onClick={()=>{setIsModalOpen(true)}}
              startIcon={<FiEdit className = 'w-[14px] h-[14px]' />}
              variant="contained"
              color="border-button-white"
              className="!w-[69px] !h-[30px] !text-[13px]">
              Edit
            </Button>
          </div>
        </div>
      </Box>
    </Card>
  );
}

export default CampaignCard;
