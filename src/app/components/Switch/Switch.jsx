import { FormControl, Switch } from "@mui/material";
import React from "react";

function CustomSwitch({ label }) {
  return (
    <FormControl
      control={
        <Switch
          defaultChecked
          className="text-green-500 text-[13px]"
          color="green"
        />
      }
      label={label}
      labelPlacement="start"
    />
  );
}

export default CustomSwitch;
