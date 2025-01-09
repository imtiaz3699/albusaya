import { Divider, FormControlLabel, Switch, Typography } from "@mui/material";
import React from "react";
import ModalInputWithLabel from "../ModalInputWithLabel/ModalInputWithLabel";
import DatePickerWithLabel from "../DatePickerWithLabel/DatePickerWithLabel";
import TextArea from "../TextArea/TextArea";
import CustomSwitch from "../Switch/Switch";

function AddCampaign() {
  return (
    <div className="p-[40px] flex flex-col gap-[40px]">
      <div className="flex flex-col ">
        <Typography variant="customTitleModal">Create Campaign</Typography>
        <Typography variant="fontGray16">
          Fill out the following form to add a new campaign.
        </Typography>
      </div>
      <div className="flex flex-col gap-[20px] ">
        <ModalInputWithLabel label="Campaign Name" required={true} />

        <DatePickerWithLabel required={true} label="Start Datetime" />
        <DatePickerWithLabel required={true} label="End Datetime" />
        <TextArea label="Description" required={true} />
      </div>
      <Divider />
      <div>
        <div>
        <FormControlLabel
                    control={
                      <Switch defaultChecked className="text-green-500 text-[13px]" color="green" />
                    }
                    label="Campaign Status"
                    labelPlacement="start"
                  />
        </div>
        
      </div>
    </div>
  );
}

export default AddCampaign;
