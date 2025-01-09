'use client'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, InputLabel } from "@mui/material";

function DatePickerWithLabel({ required, label }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-row items-center w-full gap-[60px]">
      <Box style={{ maxWidth: "217px", width: "100%" }}>
        <InputLabel variant = 'modalLabel'>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </InputLabel>
      </Box>
      <div className = 'max-w-[500px] w-full flex justify-end'>
      <DatePicker 
      style = {{width:'100%',border:'1px solid red'}}
      selected={startDate} 
      onChange={(date) => setStartDate(date)}  />
      </div>
    </div>
  );
}

export default DatePickerWithLabel;
